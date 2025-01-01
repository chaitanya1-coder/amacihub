import * as ed25519 from '@noble/ed25519';
import { hexToBytes, bytesToHex } from '@/lib/amaci/utils/conversion';
import { AMACI_CONSTANTS } from '@/lib/amaci/constants';

function getRandomBytes(length: number): Uint8Array {
  return crypto.getRandomValues(new Uint8Array(length));
}

export class EdDSA {
  static async generateKeypair(): Promise<{ publicKey: bigint; privateKey: bigint }> {
    const privateKeyBytes = getRandomBytes(32);
    const privateKeyHex = bytesToHex(privateKeyBytes);
    const privateKeyBigInt = BigInt(privateKeyHex);
    
    const validPrivateKey = privateKeyBigInt % AMACI_CONSTANTS.SNARK_SCALAR_FIELD;
    
    const publicKeyBytes = await ed25519.getPublicKey(privateKeyBytes);
    const publicKeyHex = bytesToHex(publicKeyBytes);
    const publicKeyBigInt = BigInt(publicKeyHex);
    
    return {
      privateKey: validPrivateKey,
      publicKey: publicKeyBigInt
    };
  }

  static async sign(privateKey: bigint, message: bigint): Promise<bigint> {
    const privateKeyBytes = hexToBytes(privateKey.toString(16).padStart(64, '0'));
    const messageBytes = hexToBytes(message.toString(16).padStart(64, '0'));
    
    const signature = await ed25519.sign(messageBytes, privateKeyBytes);
    return BigInt(bytesToHex(signature));
  }

  static async verify(
    publicKey: bigint,
    message: bigint,
    signature: bigint
  ): Promise<boolean> {
    const publicKeyBytes = hexToBytes(publicKey.toString(16).padStart(64, '0'));
    const messageBytes = hexToBytes(message.toString(16).padStart(64, '0'));
    const signatureBytes = hexToBytes(signature.toString(16).padStart(128, '0'));
    
    return await ed25519.verify(signatureBytes, messageBytes, publicKeyBytes);
  }
}
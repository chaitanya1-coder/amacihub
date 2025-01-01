import * as ed from '@noble/ed25519';
import { getRandomBytes, encodeToHex } from './utils';
import { AmaciKeypair } from '@/lib/amaci/types';

export async function generateKeyPair(): Promise<AmaciKeypair> {
  try {
    // Generate private key using crypto.getRandomValues
    const privateKeyBytes = getRandomBytes(32);
    
    // Ensure private key is valid for ed25519
    const privateKey = ed.utils.bytesToHex(privateKeyBytes);
    
    // Derive public key
    const publicKeyBytes = await ed.getPublicKey(privateKeyBytes);
    const publicKey = ed.utils.bytesToHex(publicKeyBytes);
    
    return {
      privateKey: `0x${privateKey}`,
      publicKey: `0x${publicKey}`
    };
  } catch (error) {
    console.error('Error in ed25519 generateKeyPair:', error);
    throw new Error('Failed to generate ed25519 keypair: ' + (error as Error).message);
  }
}
import { EdDSA } from './core/eddsa';
import { hashMessage } from './core/hash';
import { SignedMessage, VoteMessage } from './types';
import { getStoredKeypairs } from './keypair';
import { hexToBigint, bigintToHex, stringToHex } from './utils/conversion';

export async function signVoteMessage(
  keypairName: string,
  vote: VoteMessage
): Promise<SignedMessage | null> {
  const keypairs = getStoredKeypairs();
  const keypair = keypairs[keypairName];
  
  if (!keypair) return null;

  try {
    // Convert vote to message hash
    const messageStr = JSON.stringify(vote);
    const messageHash = await hashMessage(messageStr);
    
    // Sign the message hash
    const signature = await EdDSA.sign(
      hexToBigint(keypair.privateKey),
      messageHash
    );

    return {
      message: messageStr,
      signature: bigintToHex(signature),
      publicKey: keypair.publicKey
    };
  } catch (error) {
    console.error('Error signing message:', error);
    throw new Error('Failed to sign message: ' + (error as Error).message);
  }
}
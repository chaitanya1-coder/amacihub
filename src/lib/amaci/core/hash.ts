import { BrowserBuffer } from '@/lib/utils/buffer';

export async function hashMessage(message: string | Uint8Array): Promise<bigint> {
  try {
    // Convert input to Uint8Array if it's a string
    const data = typeof message === 'string' 
      ? new TextEncoder().encode(message)
      : message;
    
    // Use SHA-256 for hashing
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    return BigInt('0x' + hashHex);
  } catch (error) {
    console.error('Error in hashMessage:', error);
    throw new Error('Failed to hash message: ' + (error as Error).message);
  }
}
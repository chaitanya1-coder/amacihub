import { generateKeyPair } from '../crypto/ed25519';
import { AmaciKeypair } from './types';

export async function generateKeypair(name: string): Promise<AmaciKeypair> {
  if (!name) {
    throw new Error('Keypair name is required');
  }

  try {
    const keypair = await generateKeyPair();
    
    // Store in local storage
    const storedKeypairs = getStoredKeypairs();
    storedKeypairs[name] = keypair;
    localStorage.setItem('amaciKeypairs', JSON.stringify(storedKeypairs));
    
    return keypair;
  } catch (error) {
    console.error('Error in generateKeypair:', error);
    throw new Error('Failed to generate keypair: ' + (error as Error).message);
  }
}

export function getStoredKeypairs(): Record<string, AmaciKeypair> {
  try {
    const stored = localStorage.getItem('amaciKeypairs');
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error getting stored keypairs:', error);
    return {};
  }
}
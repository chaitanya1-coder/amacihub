import { BrowserBuffer } from '@/lib/utils/buffer';

export function getRandomBytes(length: number): Uint8Array {
  return crypto.getRandomValues(new Uint8Array(length));
}

export function encodeToHex(data: Uint8Array): string {
  return '0x' + BrowserBuffer.toHex(data);
}

export function decodeFromHex(hex: string): Uint8Array {
  return BrowserBuffer.fromHex(hex.startsWith('0x') ? hex.slice(2) : hex);
}
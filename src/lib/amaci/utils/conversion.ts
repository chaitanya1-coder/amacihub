import { BrowserBuffer } from './buffer';

export function bigintToHex(n: bigint): string {
  return '0x' + n.toString(16).padStart(64, '0');
}

export function hexToBigint(hex: string): bigint {
  return BigInt(hex);
}

export function stringToHex(str: string): string {
  return '0x' + BrowserBuffer.toHex(new TextEncoder().encode(str));
}

export function hexToString(hex: string): string {
  return new TextDecoder().decode(BrowserBuffer.fromHex(hex.slice(2)));
}

export function hexToBytes(hex: string): Uint8Array {
  return BrowserBuffer.fromHex(hex);
}

export function bytesToHex(bytes: Uint8Array): string {
  return '0x' + BrowserBuffer.toHex(bytes);
}
export class BrowserBuffer {
  static from(data: string | ArrayBuffer, encoding?: string): Uint8Array {
    if (typeof data === 'string') {
      if (encoding === 'hex') {
        return this.fromHex(data);
      }
      // UTF-8 encoding by default
      return new TextEncoder().encode(data);
    }
    return new Uint8Array(data);
  }

  static fromHex(hex: string): Uint8Array {
    const str = hex.startsWith('0x') ? hex.slice(2) : hex;
    const bytes = new Uint8Array(str.length / 2);
    for (let i = 0; i < str.length; i += 2) {
      bytes[i / 2] = parseInt(str.slice(i, i + 2), 16);
    }
    return bytes;
  }

  static toHex(bytes: Uint8Array): string {
    return Array.from(bytes)
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }
}
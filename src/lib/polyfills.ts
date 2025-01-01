import { Buffer } from 'buffer';
import process from 'process';

// Ensure global is defined
if (typeof global === 'undefined') {
  (window as any).global = window;
}

// Set up Buffer
(window as any).Buffer = Buffer;

// Set up process
(window as any).process = process;

// Ensure crypto is available
if (!window.crypto) {
  throw new Error('Crypto API is not available in this environment');
}

export {};
export interface Keypair {
  name: string;
  publicKey: string;
  status: 'active' | 'inactive';
  lastUsed: string;
}

export interface Activity {
  date: string;
  action: string;
  keypair: string;
  status: 'success' | 'error';
}
export interface AmaciKeypair {
  publicKey: string;
  privateKey: string;
}

export interface SignedMessage {
  message: string;
  signature: string;
  publicKey: string;
}

export interface VoteMessage {
  option: 'yes' | 'no';
  amount: number;
}
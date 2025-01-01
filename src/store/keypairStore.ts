import { create } from 'zustand';
import { AmaciKeypair } from '@/lib/amaci/types';

interface KeypairStore {
  keypairs: Record<string, AmaciKeypair>;
  addKeypair: (name: string, keypair: AmaciKeypair) => void;
  getKeypair: (name: string) => AmaciKeypair | null;
  getAllKeypairs: () => Record<string, AmaciKeypair>;
}

export const useKeypairStore = create<KeypairStore>((set, get) => ({
  keypairs: {},
  addKeypair: (name, keypair) => 
    set(state => ({ 
      keypairs: { ...state.keypairs, [name]: keypair }
    })),
  getKeypair: (name) => get().keypairs[name] || null,
  getAllKeypairs: () => get().keypairs,
}));
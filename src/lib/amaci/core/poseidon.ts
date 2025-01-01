import { buildPoseidon } from 'circomlibjs';

let poseidonInstance: any = null;

async function getPoseidon() {
  if (!poseidonInstance) {
    poseidonInstance = await buildPoseidon();
  }
  return poseidonInstance;
}

export async function poseidonHash(inputs: bigint[]): Promise<bigint> {
  const poseidon = await getPoseidon();
  const hash = poseidon.F.toString(
    poseidon(inputs.map(x => poseidon.F.e(x.toString())))
  );
  return BigInt(hash);
}
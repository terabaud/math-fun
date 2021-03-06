import { BitBuffer } from '../bit-buffer/bit-buffer.mjs';

/**
 * Get primes up to N via the Sieve of Eratosthenes algorithm
 * 
 * @param {Number} N prime limit
 * @returns {Array} Array of primes up to N 
 */
export function primeSieve(N = 100) {
  const bb = new BitBuffer(N + 1).fill(true);
  bb.setBit(0, false).setBit(1, false);
  for (let i = 2; i <= (Math.sqrt(N)|0); i++) {
    if (!bb.getBit(i)) {
      continue;
    }
    for (let j = i * i; j <= N; j += i) {
      bb.setBit(j, false);
    }
  }
  return bb.getOffsets();
}
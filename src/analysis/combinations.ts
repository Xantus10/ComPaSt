
const HASHES_PER_SECOND = BigInt(1e9);

export function passwordCombinations(charsetCharacters: number, length: number): bigint {
  return BigInt(charsetCharacters) ** BigInt(length);
}

export function timeToCrack(combinations: bigint): string {
  let compare = BigInt(86400) * HASHES_PER_SECOND
  if (compare > combinations) {
    return 'In a day';
  }
  compare *= BigInt(30);
  if (compare > combinations) {
    return 'In a month';
  }
  compare *= BigInt(6);
  if (compare > combinations) {
    return 'In half a year';
  }
  compare *= BigInt(2);
  if (compare > combinations) {
    return 'In a year';
  }
  compare *= BigInt(5);
  if (compare > combinations) {
    return 'In five years';
  }
  compare *= BigInt(2);
  if (compare > combinations) {
    return 'In ten years';
  }
  compare *= BigInt(10);
  if (compare > combinations) {
    return 'In a hundered years';
  }
  compare *= BigInt(10);
  if (compare > combinations) {
    return 'In a thousand years';
  }
  compare *= BigInt(14e6);
  if (compare > combinations) {
    return 'In a single universe';
  }
  return 'Multiple universes time';
}

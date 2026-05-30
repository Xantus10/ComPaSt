
export type Charset = 'lower' | 'upper' | 'number' | 'symbol' | 'other';

export const CHARSETS: Charset[] = ['lower', 'upper', 'number', 'symbol', 'other'];

/**
 * One single character
 */
export interface Character {
  /**
   * Charset of the character
   */
  type: Charset;

  /**
   * The string value
   */
  value: string;

  /**
   * The charcode (For ease of access)
   */
  charcode: number;
};

export function charType(char: string): Charset {
  let charcode = char.charCodeAt(0);
  if (charcode >= 127 || charcode <= 31) {
    return 'other'
  } else if (charcode >= 48 && charcode <= 57) {
    return 'number'
  } else if (charcode >= 65 && charcode <= 90) {
    return 'upper'
  } else if (charcode >= 97 && charcode <= 122) {
    return 'lower'
  } else {
    return 'symbol'
  }
}

export class Password {
  raw = '';
  chars: Character[] = [];
  length = 0;

  health = 100;

  counts: Record<Charset, number> = {
    upper: 0,
    lower: 0,
    number: 0,
    symbol: 0,
    other: 0
  };

  constructor(text: string) {
    this.raw = text;
    this.length = this.raw.length;
    this.init();
  }

  private init() {
    Array.from(this.raw).forEach((val) => {
      let type = charType(val);
      this.chars.push({type: type, value: val, charcode: val.charCodeAt(0)});
      this.counts[type] += 1;
    });
  }

  contains(charset: Charset) {
    return this.counts[charset] > 0;
  }
};


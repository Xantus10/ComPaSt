
export type Charset = 'lower' | 'upper' | 'number' | 'symbol' | 'other';

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
    return 'number'
  } else {
    return 'symbol'
  }
}

export class Password {
  raw = '';
  chars: Character[] = [];
  length = 0;

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

export interface PasswordChecks {low: boolean, medium: boolean, high: boolean};

export function normalChecks(password: Password): PasswordChecks {
  let res: PasswordChecks = {low: false, medium: false, high: false};
  if (password.length < 12 || !password.contains('symbol')) {
    res.high = false;
  }
  if (password.length < 10 || !password.contains('number')) {
    res.medium = false;
  }
  if (password.length < 8 || !password.contains('upper')|| !password.contains('lower')) {
    res.low = false;
  }
  if (res.low == false) res.medium = false;
  if (res.medium == false) res.high = false;
  return res;
}

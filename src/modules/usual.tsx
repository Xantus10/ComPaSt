import { Title, Table, Text } from '@mantine/core'

import { Password } from '../helper/password';
import { passwordCombinations, timeToCrack } from '../helper/combinations';

import TextDisplay from '../components/TextDisplay';

export interface PasswordChecks {low: boolean, medium: boolean, high: boolean};

export function normalChecks(password: Password): PasswordChecks {
  let res: PasswordChecks = {low: true, medium: true, high: true};
  if (password.length < 12 || !password.contains('symbol')) {
    res.high = false;
  }
  if (password.length < 10 || !password.contains('number')) {
    res.medium = false;
  }
  if (password.length < 8 || !password.contains('uppercase')|| !password.contains('lowercase')) {
    res.low = false;
  }
  if (res.low == false) res.medium = false;
  if (res.medium == false) res.high = false;
  return res;
}

function UsualModule({ password }: {password: Password}) {
  let checks = normalChecks(password);
  let charsetCharacters = (password.contains('lowercase') ? 26 : 0) + (password.contains('uppercase') ? 26 : 0) +
                          (password.contains('number') ? 10 : 0) + (password.contains('symbol') ? 33 : 0);
  let numOfCombinations = (charsetCharacters == 0) ? BigInt(0) : passwordCombinations(charsetCharacters, password.length);

  return (
      <>
        <Table data={{body: [
          [<TextDisplay sev={(checks.low) ? 'info' : 'critical'} tooltip='Check for prehistoric password complexity'>Websites from the 20th century: {(checks.low) ? 'PASS' : 'FAIL'}</TextDisplay>, <Text>Must be at least 8 characters + an uppercase character</Text>],
          [<TextDisplay sev={(checks.medium) ? 'info' : 'critical'} tooltip='Password check on most websites'>Most websites: {(checks.medium) ? 'PASS' : 'FAIL'}</TextDisplay>, <Text>Must be at least 10 characters + an uppercase character and a number</Text>],
          [<TextDisplay sev={(checks.high) ? 'info' : 'critical'} tooltip='Check on the better websites'>Secure websites: {(checks.high) ? 'PASS' : 'FAIL'}</TextDisplay>, <Text>Must be at least 12 characters + an uppercase character, number and a symbol</Text>]
        ]}} />
        <Title order={4} m={30} ta='center'>Time to crack using standard bruteforce: {timeToCrack(numOfCombinations)}</Title>
      </>
    )
}

export default UsualModule;

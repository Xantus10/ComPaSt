import { useState, useEffect } from 'react'
import { PasswordInput, Title, Table, Text } from '@mantine/core'

import { Password, normalChecks, type PasswordChecks } from '../analysis/password';
import { passwordCombinations, timeToCrack } from '../analysis/combinations';

import TextDisplay from '../components/TextDisplay';

function MainPage() {
  const [inp, setInp] = useState("");
  const [checks, setChecks] = useState<PasswordChecks>({low: false, medium: false, high: false});
  const [numOfCombinations, setNumOfCombinations] = useState<bigint>(BigInt(0));

  useEffect(() => {
    let pass = new Password(inp);
    console.log(pass.counts);
    setChecks(normalChecks(pass));
    let charsetCharacters = (pass.contains('lower') ? 26 : 0) + (pass.contains('upper') ? 26 : 0) +
                            (pass.contains('number') ? 10 : 0) + (pass.contains('symbol') ? 33 : 0);
    setNumOfCombinations(passwordCombinations(charsetCharacters, pass.length));
  }, [inp])

  return (
      <>
        <PasswordInput label="Enter your password" value={inp} onChange={(e) => setInp(e.currentTarget.value)} />
        <Title order={1} mt={50} ta='center'>Analysis results</Title>
        <Title order={2}>Usual checks</Title>
        <Table data={{body: [
          [<TextDisplay sev={(checks.low) ? 'info' : 'critical'} tooltip='Check for prehistoric password complexity'>Websites from the 20th century: {(checks.low) ? 'PASS' : 'FAIL'}</TextDisplay>, <Text>Must be at least 8 characters + an uppercase character</Text>],
          [<TextDisplay sev={(checks.medium) ? 'info' : 'critical'} tooltip='Password check on most websites'>Most websites: {(checks.medium) ? 'PASS' : 'FAIL'}</TextDisplay>, <Text>Must be at least 10 characters + an uppercase character and a number</Text>],
          [<TextDisplay sev={(checks.high) ? 'info' : 'critical'} tooltip='Check on the better websites'>Secure websites: {(checks.high) ? 'PASS' : 'FAIL'}</TextDisplay>, <Text>Must be at least 12 characters + an uppercase character, number and a symbol</Text>]
        ]}} />
        <Title order={4} m={30} ta='center'>Time to crack using standard bruteforce: {timeToCrack(numOfCombinations)}</Title>
      </>
    )
}

export default MainPage

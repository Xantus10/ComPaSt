import { useState, useEffect } from 'react'
import { PasswordInput, Title, Table, Text } from '@mantine/core'

import { Password, normalChecks, type PasswordChecks } from '../analysis/password';

import TextDisplay from '../components/TextDisplay';

function MainPage() {
  const [inp, setInp] = useState("");
  const [checks, setChecks] = useState<PasswordChecks>({low: false, medium: false, high: false});

  useEffect(() => {
    let pass = new Password(inp);
    console.log(pass.counts);
    setChecks(normalChecks(pass));
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
      </>
    )
}

export default MainPage

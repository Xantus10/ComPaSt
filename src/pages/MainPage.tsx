import { useState, useEffect } from 'react'
import { PasswordInput, Title } from '@mantine/core'

import { Password, normalChecks, type PasswordChecks } from '../analysis/password';

function MainPage() {
  const [inp, setInp] = useState("");
  const [checks, setChecks] = useState<PasswordChecks>({low: false, medium: false, high: false});

  useEffect(() => {
    let pass = new Password(inp);
    setChecks(normalChecks(pass));
  }, [inp])

  return (
      <>
        <PasswordInput label="Enter your password" value={inp} onChange={(e) => setInp(e.currentTarget.value)} />
        <Title order={1} mt={50} ta='center'>Analysis results</Title>
        <Title order={2}>Usual checks</Title>
      </>
    )
}

export default MainPage

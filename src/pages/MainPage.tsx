import { useState, useEffect } from 'react'
import { PasswordInput, Title } from '@mantine/core'

import { Password } from '../helper/password';

import UsualModule from '../modules/usual';
import LengthModule from '../modules/length';
import CharsetsModule from '../modules/charsets';

function MainPage() {
  const [inp, setInp] = useState("");
  const [pass, setPass] = useState(new Password(""));

  useEffect(() => {
    setPass(new Password(inp));
  }, [inp])

  return (
      <>
        <PasswordInput label="Enter your password" value={inp} onChange={(e) => setInp(e.currentTarget.value)} />
        <Title order={1} mt={50} ta='center'>Analysis results</Title>
        <Title order={2}>Usual checks</Title>
        <UsualModule password={pass} />
        <Title order={2}>Length-based checks</Title>
        <LengthModule password={pass} />
        <Title order={2}>Charsets information</Title>
        <CharsetsModule password={pass} />
      </>
    )
}

export default MainPage

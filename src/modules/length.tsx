import { Title, Table, Text } from '@mantine/core'

import { Password, type Charset } from '../helper/password';

import TextDisplay from '../components/TextDisplay';


export function findLongestConsecutiveChunks(password: Password): Record<Charset, number> {
  let ret: Record<Charset, number> = {lowercase: 0, number: 0, uppercase: 0, symbol: 0, other: 0};
  let candidateType: Charset = password.chars[0].type;
  let candidateCount = 0;

  password.chars.forEach((val, ix) => {
    if (val.type !== candidateType) {
      if (candidateCount > ret[candidateType]) ret[candidateType] = candidateCount;
      candidateCount = 1;
      candidateType = val.type;
    } else {
      candidateCount += 1;
    }
    if (ix == password.length-1) {
      if (candidateCount > ret[candidateType]) ret[candidateType] = candidateCount;
    }
  })


  return ret;
}

function LengthModule({ password }: {password: Password}) {
  if (password.length == 0) return <></>;
  let body: React.ReactNode[][] = [];

  if (password.length < 12) {
    body.push(
      [<TextDisplay sev='critical'>Password is shorter than 12 characters</TextDisplay>,
      <Text></Text>]
    )
  } else if (password.length < 14) {
    body.push(
      [<TextDisplay sev='important'>Password is shorter than 14 characters</TextDisplay>,
      <Text>Passwords longer than 14 characters are virtually unbreakable</Text>]
    )
  }

  let consecutiveChunks = findLongestConsecutiveChunks(password);

  Object.entries(consecutiveChunks).forEach(([key, val]) => {
    if (val > 4) {
      body.push(
        [<TextDisplay sev='severe'>Password contains long chunks of {key} charset ({val.toString()})</TextDisplay>,
        <Text>Passwords with long chunks might be more susceptible to pattern based bruteforce and may be easy to read</Text>]
      )
    }
  })

  return (
      <>
        <Title order={4} m={30}>Length of password: {password.length}</Title>
        <Table data={{body: body}} />
      </>
    )
}

export default LengthModule;

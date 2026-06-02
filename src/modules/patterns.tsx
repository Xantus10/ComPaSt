import { Title, Table, Text } from '@mantine/core'

import { Password, type Charset } from '../helper/password';

import TextDisplay from '../components/TextDisplay';


export function checkCharsetPosition(password: Password, charset: Charset, position: 'start' | 'end'): {present: boolean; edge: boolean} {
  // How many characters to analyze (incl. boundary)
  const analyzeCharacters = 3;
  const [forloopStart, forloopStep] = (position === 'start') ? [0, 1] : [password.length-1, -1];
  const forloopBound = forloopStart+(forloopStep*analyzeCharacters);

  let isEdge = (password.chars[forloopStart].type === charset);

  let ret = {
    present: isEdge,
    edge: isEdge
  };

  if (!isEdge) {
    for (let i = forloopStart+forloopStep; i !== forloopBound; i += forloopStep) {
      if (password.chars[i].type === charset) ret.present = true;
    }
  }

  return ret;
}

function PatternsModule({ password }: {password: Password}) {
  if (password.length < 6) return <Title order={4} ta='center'>Too short for Pattern analysis</Title>;
  let positionbody: React.ReactNode[][] = [];

  let checkEnd: Charset[] = ['number', 'symbol'];
  let checkStart: Charset[] = ['uppercase'];

  checkStart.forEach((val) => {
    let check = checkCharsetPosition(password, val, 'start');
    if (check.edge) {
      positionbody.push(
        [<TextDisplay sev='severe'>The first character of a password is {val}, very common position</TextDisplay>,
        <Text>Hackers can often guess common positions for some characters, like an uppercase letter at the start</Text>]
      );
    } else if (check.present) {
      positionbody.push(
        [<TextDisplay sev='info'>{val[0].toUpperCase() + val.substring(1)} character is near the start of a password, common position</TextDisplay>,
        <Text>Hackers can often guess common positions for some characters, like an uppercase letter at the start</Text>]
      );
    }
  });

  checkEnd.forEach((val) => {
    let check = checkCharsetPosition(password, val, 'end');
    if (check.edge) {
      positionbody.push(
        [<TextDisplay sev='severe'>The last character of a password is {val}, very common position</TextDisplay>,
        <Text>Hackers can often guess common positions for some characters, like a symbol at the end</Text>]
      );
    } else if (check.present) {
      positionbody.push(
        [<TextDisplay sev='info'>{val[0].toUpperCase() + val.substring(1)} character is near the end of a password, common position</TextDisplay>,
        <Text>Hackers can often guess common positions for some characters, like a symbol at the end</Text>]
      );
    }
  });

  return (
      <>
        <Title order={4}>Character position</Title>
        <Table data={{body: positionbody}} />
      </>
    )
}

export default PatternsModule;

import { Title, Table, Text, type MantineColor } from '@mantine/core'
import { PieChart } from '@mantine/charts';

import { Password, type Charset } from '../helper/password';

import TextDisplay from '../components/TextDisplay';

export const CHARSET_COLORS: Record<Charset, MantineColor> = {
  lowercase: 'indigo',
  uppercase: 'cyan',
  number: 'green',
  symbol: 'grape',
  other: 'red'
};

export const COMMON_CHARACTERS = ['!', '+', '-', '*', '/', '@', '_']

export function usesCommonSymbols(password: Password): {single: boolean; onlyCommon: boolean} {
  let ret = {
    single: password.counts.symbol === 1,
    onlyCommon: true
  };

  password.chars.forEach((ch) => {
    if (ch.type === 'symbol') {
      ret.onlyCommon &&= (COMMON_CHARACTERS.includes(ch.value));
    }
  })

  return ret;
}

function CharsetsModule({ password }: {password: Password}) {
  if (password.length == 0) return <></>;
  let body: React.ReactNode[][] = [];

  (Object.entries(password.counts) as [Charset, number][]).filter(([key, _]) => key !== 'other').forEach(([key, val]) => {
    if (val === 0) {
      body.push(
        [<TextDisplay sev='critical'>Password does not contain a single {key} character</TextDisplay>,
        <Text>Modern passwords should aim to incorporate every charset</Text>]
      );
    } else if (val === 1) {
      body.push(
        [<TextDisplay sev='important'>Password contains only a single {key} character</TextDisplay>,
        <Text>Single character doesn't provide much security and is often placed in a predictable position</Text>]
      );
    }
  })

  if (password.contains('symbol')) {
    let commonSymbols = usesCommonSymbols(password);
    if (commonSymbols.onlyCommon) {
      if (commonSymbols.single) {
        body.push(
          [<TextDisplay sev='severe'>The single symbol is a commonly used one</TextDisplay>,
          <Text>People more often than not use symbols like + - * / ! @, try using an uncommon symbol like bracket or quote</Text>]
        );
      } else {
        body.push(
          [<TextDisplay sev='info'>All the symbols used are commonly used ones</TextDisplay>,
          <Text>People more often than not use symbols like + - * / ! @, try using an uncommon symbol like bracket or quote</Text>]
        );
      }
    }
  }

  return (
      <>
        <Title order={4} m={30}>Distribution of characters</Title>
        <PieChart data={(Object.entries(password.counts) as [Charset, number][]).filter(([_, val]) => val!==0).map(([key, val]) => ({name: key, value: val, color: CHARSET_COLORS[key]}))}
                  withLabels labelsPosition='inside' labelsType='percent' size={200} withTooltip tooltipDataSource='segment' />
        <Table data={{body: body}} />
      </>
    )
}

export default CharsetsModule;

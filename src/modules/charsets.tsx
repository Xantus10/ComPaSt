import { Title, Table, Text, type MantineColor } from '@mantine/core'
import { PieChart } from '@mantine/charts';

import { Password, type Charset } from '../helper/password';

import TextDisplay from '../components/TextDisplay';

export const CHARSET_COLORS: Record<Charset, MantineColor> = {
  lower: 'blue',
  upper: 'cyan',
  number: 'green',
  symbol: 'grape',
  other: 'red'
};


function CharsetsModule({ password }: {password: Password}) {
  if (password.length == 0) return <></>;
  let body: React.ReactNode[][] = [];

  (Object.entries(password.counts) as [Charset, number][]).filter(([key, _]) => key !== 'other').forEach(([key, val]) => {
    if (val === 0) {
      body.push(
        [<TextDisplay sev='severe'>Password does not contain a single {key} character</TextDisplay>,
        <Text>Modern passwords should aim to incorporate every charset</Text>]
      )
    }
  })

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

import { Text, Tooltip } from "@mantine/core";


function TextDisplay(
  {children, tooltip, sev}:
  {
    children: string | string[];
    sev: 'critical' | 'severe' | 'important' | 'info';
    tooltip?: string;
  }
) {

  let color = '';
  switch (sev) {
    case 'critical':
      color = 'red.8';
      break;
    case 'severe':
      color = 'red.5';
      break;
    case 'important':
      color = 'yellow.5';
      break;
    case 'info':
      color = 'blue.3';
      break;
  }

  let text = <Text c={color} w='fit-content'>{children}</Text>;

  if (!tooltip) {
    return text;
  }
  return (
    <Tooltip label={tooltip}>
      {text}
    </Tooltip>
  );
}

export default TextDisplay
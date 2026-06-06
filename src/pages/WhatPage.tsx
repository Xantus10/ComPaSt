import { Title, Text, List, Code, Anchor } from '@mantine/core'


function WhatPage() {

  return (
      <>
        <Title order={1} ta='center'>What does ComPaSt analyze?</Title>
        <Text>ComPaSt analysis is done through modules. Each module checks an aspect of a password strenght.</Text>
        <Text>Feedback is provided mostly through warning messages, which tell you the issues with your password. Although you don't necessarily need to fix ALL of them. These messages just provide you with some good feedback, so you can evaluate how satisfied are you with your password.</Text>
        <Title order={2}>Length</Title>
        <Text>The most important aspect of a password is its length. What a stronger password? Just add one character! The checks here are not hard to understand.</Text>
        <List type='unordered'>
          <List.Item><Code>Absolute length</Code> - Password should aim to be at least 12 characters. A password with 14+ characters is very strong.</List.Item>
          <List.Item><Code>Monotone chunks</Code> - Long chunks of the same charset make the password usually easy to read (check <Anchor href='https://en.wikipedia.org/wiki/Shoulder_surfing_(computer_security)'>Shoulder surfing</Anchor>) and are generally usually badly put together.</List.Item>
        </List>
        <Title order={2}>Charsets</Title>
      </>
    )
}

export default WhatPage

import { Title, Text, List, Code, Paper } from '@mantine/core'


function MakeStrongPassPage() {

  return (
      <>
        <Title order={1} ta='center'>How to make a strong password</Title>
        <Title order={2}>Option 1 - Random + Password manager</Title>
        <Text>The best password you could ever have is a randomly generated password. However, most people will not remember such a password. That's where pasword managers come in.</Text>
        <Text>Password manager is going to store all your passwords and you will unlock it with a single master password. Password managers allow you to have random passwords anywhere, but they are just a solid option in general.</Text>
        <Text>Some issues that should be noted are</Text>
        <List type='unordered'>
          <List.Item>The password manager itself requires a password you will have to remember</List.Item>
          <List.Item>When using random passwords, you are unable to function without the password manager</List.Item>
        </List>
        <Text>The optimal strategy is to have strong passwords that you remember and store those in the password manager. That way, you gain the comfort provided by the password manager, but you are not dependent on it.</Text>
        <Title order={2}>Option 2 - Passphrases</Title>
        <Text>Password strength lies mainly in its length. While passWORDS are typically built on words, passPHRASES are built on whole phrases.</Text>
        <Text>It is not as simple as just using a sentence or a phrase as a password, since attackers might be able to put together frequently used words and instead of them bruteforcing letter-by-letter, they might bruteforce word-by-word.</Text>
        <Text>Because of that, passphrases introduce some changes to the words, these changes may include</Text>
        <List type='unordered'>
          <List.Item>Capitalizing some letters (in the middle of the words)</List.Item>
          <List.Item>Mixing in numbers / symbols</List.Item>
          <List.Item>Replacing certain spaces with something else</List.Item>
        </List>
        <Paper shadow='sm' m='sm' p='sm' bg='dark.6' w='75%'>
          <Text>Example:</Text>
          <Text>Let's take a sentence like this</Text>
          <Code>The bat attacked the melon.</Code>
          <Text>I can capitalize the third letter of every word</Text>
          <Code>ThE baT atTacked thE meLon.</Code>
          <Text>I can replace the 'h' in 'the' with '4'</Text>
          <Code>T4E baT atTacked t4E meLon.</Code>
          <Text>I can put emphasis on the subject and object of the sentence with some symbols</Text>
          <Code>T4E **baT** atTacked t4E **meLon**.</Code>
          <Text>And finally I can mangle the word 'attacked' a bit</Text>
          <Code>T4E **baT** atTkd t4E **meLon**.</Code>
          <Text>And that is the final result!</Text>
        </Paper>
        <Text>Passphrases are the most secure variant of password (aside from random), but they are quite long and it can be tedious to type them in.</Text>
        <Title order={2}>Option 3 - Password making algorithm</Title>
        <Text>A mini version of passphrases, this algorithm can create really strong, random looking passwords that aren't too long.</Text>
        <Text>Note that there may be other algorithms like this and you can always create your own.</Text>
        <Paper shadow='sm' m='sm' p='sm' bg='dark.6' w='75%'>
          <Text>Example:</Text>
          <Text>First, we must find some memorable phrase. This can be a line from a song, your favourite quote or something similar. Simply a few words that you remember well.</Text>
          <Code>little mary had a lamb</Code>
          <Text>Next grab just the first 2 or 3 letters of each word.</Text>
          <Code>litmarhadalam</Code>
          <Text>The singular 'a' can be expanded.</Text>
          <Code>litmarhadaaalam</Code>
          <Text>Capitalize the letters (According to some pattern)</Text>
          <Code>LitMarHadAaaLam</Code>
          <Text>Add some numbers in between the words (Use some unusual but easy to remember number pattern like 14863 - inspect at your numpad). You can add a number at the beginning and at the end.</Text>
          <Code>Lit1Mar4Had8Aaa6Lam3</Code>
          <Text>Add a few symbols (Try to go for unusual symbols like quotation marks or brackets and DO NOT put them only at the end)</Text>
          <Code>))Lit1Mar4Had8Aaa6Lam3#</Code>
          <Text>As an optional step, you may introduce an anomaly. I will change the capitalization of my 'aaa' part</Text>
          <Code>))Lit1Mar4Had8AAa6Lam3#</Code>
        </Paper>
        <Text>We ended up with a random looking password with whooping 23 characters! And we don't have to remember it, we just need to remember how it was formed.</Text>
        <Text>A password like this can be used for your password manager master password or for critical services like emails.</Text>
      </>
    )
}

export default MakeStrongPassPage

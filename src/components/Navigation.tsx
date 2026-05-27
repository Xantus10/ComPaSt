import { useNavigate } from 'react-router-dom'
import { Group, Button } from '@mantine/core'

function Navigation() {
  const navigate = useNavigate();


  return (
      <>
        <Group justify='space-between'>
          <Button variant='outline' onClick={() => navigate('/')}>Main page</Button>
          <Button variant='outline' onClick={() => navigate('/guide')}>Make a strong password</Button>
          <Button variant='outline' onClick={() => navigate('/what')}>What is ComPaSt?</Button>
          <Button variant='outline' onClick={() => navigate('/security')}>Security concerns</Button>
        </Group>
      </>
    )
}

export default Navigation

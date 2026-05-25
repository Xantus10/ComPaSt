import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Paper, Title, Box } from '@mantine/core'
import MainPage from './Pages/MainPage'
import './App.css'

function App() {
  return (
      <>
      <Paper bg="blue.8" p={50} ta="center" mb={40}>
        <Title>Complex Password Strength Checker</Title>
        <Title order={2}>ComPaSt</Title>
      </Paper>
      <Box w="75%" m="auto">
        <BrowserRouter basename='/ComPaSt/'>
          <Routes>
            <Route path='/' element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </Box>
      </>
    )
}

export default App

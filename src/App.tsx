import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Paper, Title, Box } from '@mantine/core'

import Navigation from './components/Navigation'
import MainPage from './pages/MainPage'
import MakeStrongPassPage from './pages/MakeStrongPassPage'

import './App.css'

function App() {
  return (
      <>
      <BrowserRouter basename='/ComPaSt/'>
        <Paper bg="blue.8" p="20 60" ta="center" mb={40}>
          <Title>Complex Password Strength Checker</Title>
          <Title order={2}>ComPaSt</Title>
        </Paper>
        <Navigation />
        <Box m="md">
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/guide' element={<MakeStrongPassPage />} />
              <Route path='/what' element={<>What
Length

Total
Longest consecutive chunk for all charsets

Charsets

Missing charset
Distribution
Too little abs count
Common symbol usage

Patterns

Distribution of charsets at the beginning and end + point out problematic ones
Pattern in capitalization
Pattern in number placement

Words

Number lines
Real words - have a wordlist for every letter
Consecutive symbol charcodes - for alpha + symbols
Keyboard</>} />
              <Route path='/security' element={<>Security</>} />
            </Routes>
        </Box>
      </BrowserRouter>
      </>
    )
}

export default App

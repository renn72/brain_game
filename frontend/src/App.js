import './App.css'
import { useState } from 'react'
import { Text, Button } from '@chakra-ui/react'

import BrainStack from './components/BrainStack'

function App() {
  return (
    <div className='App'>
      <header>
        <Text fontSize='3xl'>brain game</Text>
      </header>
      <BrainStack />
      <Button m={6} colorScheme='yellow'>
        Submit
      </Button>
      <Button m={6} colorScheme='yellow'>
        log state
      </Button>
      <footer>Footer</footer>
    </div>
  )
}

export default App

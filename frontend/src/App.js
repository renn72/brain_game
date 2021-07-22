import './App.css'
import React, { useState } from 'react'

import { useDisclosure, Flex, Spacer } from '@chakra-ui/react'

import BrainStack from './components/BrainStack'
import HighScore from './components/HighScore'
import Header from './components/Header'
import StartResetButtons from './components/StartResetButtons'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure(false)
  const [thinking, setThinking] = useState(false)
  return (
    <div className='App'>
      <Flex flexDirection='column' h='100vh'>
        <Header onOpen={onOpen} />
        <BrainStack />
        <Spacer />
        <StartResetButtons thinking={thinking} setThinking={setThinking} />
      </Flex>
      <HighScore isOpen={isOpen} onClose={onClose} />
    </div>
  )
}

export default App

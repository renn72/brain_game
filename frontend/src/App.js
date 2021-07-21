import './App.css'
import React from 'react'

import {
  useDisclosure,
  Flex,
  Spacer,
  useBoolean,
  Button,
} from '@chakra-ui/react'

import BrainStack from './components/BrainStack'
import HighScore from './components/HighScore'
import Header from './components/Header'
import StartResetButtons from './components/StartResetButtons'
import NewHighScore from './components/NewHighScore'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure(false)
  const [openNewHighScore, setOpenNewHighScore] = useBoolean()
  return (
    <div className='App'>
      <Flex flexDirection='column' h='100vh'>
        <Header onOpen={onOpen} />
        <BrainStack />
        <Spacer />
        <StartResetButtons />
        <Button colorScheme='yellow' onClick={setOpenNewHighScore.toggle}>
          test
        </Button>
      </Flex>
      <HighScore isOpen={isOpen} onClose={onClose} />
      <NewHighScore isOpen={openNewHighScore} onClose={setOpenNewHighScore} />
    </div>
  )
}

export default App

import './App.css'
import React, { useContext, useState } from 'react'

import {
  Text,
  Button,
  useDisclosure,
  Flex,
  Spacer,
  Tooltip,
} from '@chakra-ui/react'

import BrainStack from './components/BrainStack'
import HighScore from './components/HighScore'

import { BrainContext } from './context/BrainContext'
import { ToolTipsContext } from './context/ToolTipsContext'

import sendModel from './service_objects/sendModel'

function App() {
  const { brainShape } = useContext(BrainContext)
  const { toolTips, setToolTips } = useContext(ToolTipsContext)
  const [acc, setAcc] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure(false)

  return (
    <div className='App'>
      <Flex alignItems='center' p={4}>
        <Button colorScheme='yellow' onClick={setToolTips.toggle}>
          INSTRUCTIONS
        </Button>
        <Spacer />
        <Text fontSize='6xl'>BRAIN GAME</Text>
        <Spacer />
        <Tooltip
          label='see high scores'
          isOpen={toolTips}
          bg='161430'
          color='yellow.400'
          borderWidth='1px'
          borderRadius='lg'
          borderColor='yellow.400'
        >
          <Button colorScheme='yellow' onClick={onOpen}>
            HIGH SCORES
          </Button>
        </Tooltip>
      </Flex>
      <BrainStack />
      <Tooltip
        label='run the brain'
        isOpen={toolTips}
        bg='161430'
        color='yellow.400'
        borderWidth='1px'
        borderRadius='lg'
        borderColor='yellow.400'
      >
        <Button
          m={4}
          size='lg'
          p={8}
          colorScheme='yellow'
          onClick={() => sendModel(brainShape, setAcc)}
        >
          <Text fontSize='4xl'>{acc} %</Text>
        </Button>
      </Tooltip>
      <HighScore isOpen={isOpen} onClose={onClose} />

      <footer></footer>
    </div>
  )
}

export default App

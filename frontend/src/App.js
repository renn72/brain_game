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
import Instructions from './components/Instructions'

import { BrainContext } from './context/BrainContext'
import { ToolTipsContext } from './context/ToolTipsContext'

import sendModel from './service_objects/sendModel'

function App() {
  const { brainShape } = useContext(BrainContext)
  const { toolTips } = useContext(ToolTipsContext)
  const [acc, setAcc] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure(false)

  const runButtonText = acc === 0 ? 'START' : `${acc} %`

  return (
    <div className='App'>
      <Flex alignItems='center' p={4}>
        <Instructions />
        <Spacer />
        <Text fontSize='6xl' color='purple.100'>
          BRAIN GAME
        </Text>
        <Spacer />
        <Tooltip
          label='high scores'
          isOpen={toolTips}
          bg='blue.900'
          color='yellow.400'
          borderWidth='1px'
          borderRadius='lg'
          borderColor='purple.100'
          fontSize='2xl'
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
        borderColor='purple.100'
        fontSize='2xl'
      >
        <Button
          m={4}
          size='lg'
          p={8}
          colorScheme='yellow'
          onClick={() => sendModel(brainShape, setAcc)}
        >
          <Text fontSize='4xl'>{runButtonText}</Text>
        </Button>
      </Tooltip>
      <HighScore isOpen={isOpen} onClose={onClose} />
    </div>
  )
}

export default App

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
import Header from './components/Header'

import { BrainContext } from './context/BrainContext'
import { ToolTipsContext } from './context/ToolTipsContext'

import sendModel from './service_objects/sendModel'

function App() {
  const { brainShape, resetBrain } = useContext(BrainContext)
  const { toolTips } = useContext(ToolTipsContext)
  const [acc, setAcc] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure(false)

  const runButtonText = acc === 0 ? 'START' : `${acc} %`

  return (
    <div className='App'>
      <Flex flexDirection='column' h='100vh'>
        <Header onOpen={onOpen} />
        <BrainStack />
        <Spacer />
        <div>
          <div>
            <Tooltip
              label='run the brain'
              isOpen={toolTips}
              bg='blue.900'
              color='yellow.400'
              borderWidth='1px'
              borderRadius='lg'
              borderColor='purple.100'
              fontSize='2xl'
              placement='right'
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
          </div>

          <Tooltip
            label='reset the brain to 3 x 3'
            isOpen={toolTips}
            bg='blue.900'
            color='yellow.400'
            borderWidth='1px'
            borderRadius='lg'
            borderColor='purple.100'
            fontSize='2xl'
            placement='right'
          >
            <Button
              m={2}
              size='xs'
              bg='blue.900'
              color='purple.100'
              borderWidth='1px'
              borderRadius='lg'
              borderColor='purple.100'
              onClick={resetBrain}
              _hover={{}}
              _focus={{}}
              _active={{}}
            >
              <Text fontSize='sm'>reset</Text>
            </Button>
          </Tooltip>
        </div>
      </Flex>
      <HighScore isOpen={isOpen} onClose={onClose} />
    </div>
  )
}

export default App

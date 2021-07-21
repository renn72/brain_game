import './App.css'
import React, { useContext, useState } from 'react'

import {
  Text,
  Button,
  useDisclosure,
  Flex,
  Spacer,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverCloseButton,
  Box,
  ButtonGroup,
  Tooltip,
} from '@chakra-ui/react'

import BrainStack from './components/BrainStack'
import HighScore from './components/HighScore'

import { BrainContext } from './context/BrainContext'
import { ToolTipsContext } from './context/ToolTipsContext'

import sendModel from './service_objects/sendModel'

function Instructions() {
  const initialFocusRef = React.useRef()
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement='bottom'
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button colorScheme='yellow'>INSTRUCTIONS</Button>
      </PopoverTrigger>
      <PopoverContent color='yellow.400' bg='blue.900' borderColor='blue.800'>
        <PopoverHeader pt={4} border='0'>
          Train my Brain
        </PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </PopoverBody>
        <PopoverFooter
          border='0'
          d='flex'
          alignItems='center'
          justifyContent='space-between'
          pb={4}
        >
          <Box fontSize='sm'>Step 2 of 4</Box>
          <ButtonGroup size='sm'>
            <Button colorScheme='blue' ref={initialFocusRef}>
              Next
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}

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
        <Tooltip label='see high scores' isOpen={toolTips}>
          <Button colorScheme='yellow' onClick={onOpen}>
            HIGH SCORES
          </Button>
        </Tooltip>
      </Flex>
      <BrainStack />
      <Tooltip label='run the brain' isOpen={toolTips}>
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

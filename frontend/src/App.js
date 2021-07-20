import './App.css'
import React, { useContext, useState } from 'react'

import {
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
  Spacer,
} from '@chakra-ui/react'

import BrainStack from './components/BrainStack'
import { BrainContext } from './context/BrainContext'

import sendModel from './service_objects/sendModel'

function HighScore(props) {
  const { isOpen, onClose } = props
  return (
    <>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg='#161430' color='yellow.100'>
          <DrawerCloseButton />
          <DrawerHeader>HIGH SCORES</DrawerHeader>
          <DrawerBody>
            <Text>70.5 DAV</Text>
            <Text>70.5 DAV</Text>
            <Text>70.5 DAV</Text>
            <Text>70.5 DAV</Text>
            <Text>70.5 DAV</Text>
            <Text>70.5 DAV</Text>
            <Text>70.5 DAV</Text>
            <Text>70.5 DAV</Text>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

function App() {
  const { brainShape } = useContext(BrainContext)
  const [acc, setAcc] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure(false)

  return (
    <div className='App'>
      <Flex alignItems='center' p={4}>
        <Button colorScheme='yellow'>INSTRUCTIONS</Button>
        <Spacer />
        <Text fontSize='6xl'>BRAIN GAME</Text>
        <Spacer />
        <Button colorScheme='yellow' onClick={onOpen}>
          HIGH SCORES
        </Button>
      </Flex>
      <BrainStack />
      <Button
        m={4}
        size='lg'
        p={8}
        colorScheme='yellow'
        onClick={() => sendModel(brainShape, setAcc)}
      >
        <Text fontSize='4xl'>{acc} %</Text>
      </Button>
      <HighScore isOpen={isOpen} onClose={onClose} />

      <footer></footer>
    </div>
  )
}

export default App

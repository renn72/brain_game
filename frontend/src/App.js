import './App.css'
import React, { useContext, useState } from 'react'

import { Text, Button } from '@chakra-ui/react'

import BrainStack from './components/BrainStack'
import { BrainContext } from './context/BrainContext'

import sendModel from './service_objects/sendModel'

function App() {
  const { brainShape } = useContext(BrainContext)
  const [acc, setAcc] = useState(0)

  const handleLog = () => {
    console.log(brainShape)
  }

  return (
    <div className='App'>
      <header>
        <Text fontSize='3xl'>brain game</Text>
      </header>
      <BrainStack />
      <Button
        m={6}
        colorScheme='yellow'
        onClick={() => sendModel(brainShape, setAcc)}
      >
        <Text fontSize='4xl'>{acc} %</Text>
      </Button>

      <footer></footer>
    </div>
  )
}

export default App

import React, { useRef, useContext } from 'react'
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Text,
} from '@chakra-ui/react'

import { ToolTipsContext } from '../context/ToolTipsContext'

export default function Instructions() {
  const initialFocusRef = useRef()
  const { setToolTips } = useContext(ToolTipsContext)

  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement='bottom'
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button colorScheme='yellow' onClick={setToolTips.toggle}>
          INSTRUCTIONS
        </Button>
      </PopoverTrigger>
      <PopoverContent
        color='yellow.400'
        bg='blue.900'
        borderColor='purple.100'
        w='250px'
      >
        <PopoverHeader pt={4} border='0'>
          Train my Brain
        </PopoverHeader>
        <PopoverBody>
          <Text>
            Build a network neurons by adding and extending layers, when you
            think you have good layout, hit start and see if can get a high
            score!
          </Text>
          <Text m={4}>Technical Information</Text>
          <Text my={2}>
            The neural network gets trained against the MINST hand written
            numbers set
          </Text>
          <Text my={2}>each layer has the size of (num neurons) ^ 2 * 10</Text>
          <Text>
            each neuron color represents a different activation function
          </Text>
          <Text>yellow : relu</Text>
          <Text>purple : softmax</Text>
          <Text>orange : sigmoid</Text>
          <Text>green : tanh</Text>
          <Text>blue : elu</Text>
          <Text my={4}>
            each model gets trained over a 10,000 sample set with 2 epochs
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

import React, { useContext } from 'react'
import { HStack, Image } from '@chakra-ui/react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { BrainContext } from '../context/BrainContext'

export default function BrainRow() {
  const { brainShape } = useContext(BrainContext)
  return (
    <div>
      <HStack spacing={8}>
        <MinusIcon />
        <Image boxSize='50px' src='/images/neuron400.png' alt='neuron' />
        <Image boxSize='50px' src='/images/neuron400.png' alt='neuron' />
        <Image boxSize='50px' src='/images/neuron400.png' alt='neuron' />
        <AddIcon />
      </HStack>
    </div>
  )
}

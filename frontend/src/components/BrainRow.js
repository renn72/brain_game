import React, { useContext } from 'react'
import { HStack } from '@chakra-ui/react'
import { BrainContext } from '../context/BrainContext'
import AddButton from './AddButton'
import Neuron from './Neuron'

export default function BrainRow(props) {
  const { brainShape, extendRow } = useContext(BrainContext)

  const row = []
  const { index } = props

  for (let i = 0; i < brainShape[index]; i++) {
    row.push(<Neuron key={i} index={index} />)
  }

  const type = index === 0 ? 'row1' : 'row'
  return (
    <div>
      <HStack spacing={8}>
        {row}
        <AddButton
          handleClick={() => extendRow(index)}
          type={type}
          display={brainShape[index] < 10}
        />
      </HStack>
    </div>
  )
}

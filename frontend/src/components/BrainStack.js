import React, { useContext } from 'react'
import { VStack } from '@chakra-ui/react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { BrainContext } from '../context/BrainContext'
import BrainRow from './BrainRow'

export default function BrainStack() {
  const { brainShape, addRow, removeRow } = useContext(BrainContext)
  return (
    <div>
      <section className='game-board'>
        <VStack m={20} spacing={5}>
          <MinusIcon onClick={removeRow} />
          {brainShape.map((row, i) => (
            <BrainRow key={i} index={i} />
          ))}
          <AddIcon onClick={addRow} />
        </VStack>
      </section>
    </div>
  )
}

import React, { useContext } from 'react'
import { VStack } from '@chakra-ui/react'
import { BrainContext } from '../context/BrainContext'
import { ToolTipsContext } from '../context/ToolTipsContext'

import BrainRow from './BrainRow'
import AddButton from './AddButton'

export default function BrainStack() {
  const { brainShape, addRow } = useContext(BrainContext)
  const { toolTips } = useContext(ToolTipsContext)

  return (
    <div>
      <section className='game-board'>
        <VStack m={10} spacing={5}>
          {brainShape.map((row, i) => (
            <BrainRow key={i} index={i} />
          ))}
          <AddButton handleClick={addRow} type='stack' />
        </VStack>
      </section>
    </div>
  )
}

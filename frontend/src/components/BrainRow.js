import React, { useContext } from 'react'
import { HStack, IconButton, Tooltip } from '@chakra-ui/react'
import { RepeatIcon } from '@chakra-ui/icons'

import { BrainContext } from '../context/BrainContext'
import { ToolTipsContext } from '../context/ToolTipsContext'

import AddButton from './AddButton'
import Neuron from './Neuron'

export default function BrainRow(props) {
  const { brainShape, extendRow, changeType } = useContext(BrainContext)
  const { toolTips } = useContext(ToolTipsContext)

  const row = []
  const { index } = props

  for (let i = 0; i < brainShape[index].size; i++) {
    row.push(<Neuron key={i} index={index} />)
  }

  const type = index === Math.floor(brainShape.length / 2) ? 'row1' : 'row'

  return (
    <div>
      <HStack spacing={8}>
        <Tooltip
          label={
            index === Math.floor(brainShape.length / 2)
              ? 'change the type of neurons'
              : ''
          }
          placement='left'
          isOpen={toolTips}
          bg='blue.900'
          fontSize='2xl'
          color='yellow.400'
          borderWidth='1px'
          borderRadius='lg'
          borderColor='purple.100'
          w='150px'
        >
          <IconButton
            color='purple.100'
            variant='outline'
            borderColor='purple.100'
            border='1px'
            icon={<RepeatIcon />}
            borderRadius='20px'
            size='xs'
            _hover={{ borderColor: '#ccd0d5' }}
            _focus={{}}
            _active={{}}
            onClick={() => changeType(index)}
          />
        </Tooltip>
        {row}
        <AddButton
          handleClick={() => extendRow(index)}
          type={type}
          display={brainShape[index].size < 10}
        />
      </HStack>
    </div>
  )
}

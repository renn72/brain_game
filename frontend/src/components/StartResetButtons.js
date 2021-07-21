import React, { useContext, useState } from 'react'

import { Text, Button, Tooltip } from '@chakra-ui/react'

import { BrainContext } from '../context/BrainContext'
import { ToolTipsContext } from '../context/ToolTipsContext'

import sendModel from '../service_objects/sendModel'

export default function StartResetButtons() {
  const { brainShape, resetBrain } = useContext(BrainContext)
  const { toolTips } = useContext(ToolTipsContext)
  const [acc, setAcc] = useState(0)

  const runButtonText = acc === 0 ? 'START' : `${acc} %`

  return (
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
  )
}

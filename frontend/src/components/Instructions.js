import React, { useRef, useContext } from 'react'
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
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
      <PopoverContent color='yellow.400' bg='blue.900' borderColor='purple.100'>
        <PopoverHeader pt={4} border='0'>
          Train my Brain
        </PopoverHeader>
        <PopoverBody>
          Build a network neurons by adding and extending layers, when you think
          you have good layout, hit start and see if can get a high score!
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

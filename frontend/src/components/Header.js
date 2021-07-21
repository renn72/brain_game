import React, { useContext } from 'react'

import { Text, Button, Flex, Spacer, Tooltip } from '@chakra-ui/react'

import Instructions from './Instructions'
import { ToolTipsContext } from '../context/ToolTipsContext'

export default function Header(props) {
  const { toolTips } = useContext(ToolTipsContext)
  const { onOpen } = props

  return (
    <div>
      <Flex alignItems='center' p={4}>
        <Instructions />
        <Spacer />
        <Text fontSize='6xl' color='purple.100'>
          BRAIN GAME
        </Text>
        <Spacer />
        <Tooltip
          label='high scores'
          isOpen={toolTips}
          bg='blue.900'
          color='yellow.400'
          borderWidth='1px'
          borderRadius='lg'
          borderColor='purple.100'
          fontSize='2xl'
        >
          <Button colorScheme='yellow' onClick={onOpen}>
            HIGH SCORES
          </Button>
        </Tooltip>
      </Flex>
    </div>
  )
}

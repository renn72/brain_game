import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { MinusIcon } from '@chakra-ui/icons'

export default function RemoveButton(props) {
  const { handleClick } = props
  return (
    <IconButton
      color='yellow.400'
      variant='outline'
      border='2px'
      icon={<MinusIcon />}
      onClick={handleClick}
      borderRadius='20px'
      _hover={{ borderColor: '#ccd0d5' }}
      _focus={{}}
      _active={{}}
    />
  )
}

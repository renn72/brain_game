import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { AddIcon, ChevronDownIcon } from '@chakra-ui/icons'

export default function AddButton(props) {
  const { handleClick, type } = props

  const typeIcon = type === 'row' ? <AddIcon /> : <ChevronDownIcon />

  return (
    <IconButton
      color='yellow.400'
      variant='outline'
      border='2px'
      icon={typeIcon}
      onClick={handleClick}
      borderRadius='20px'
      _hover={{ borderColor: '#ccd0d5' }}
      _focus={{}}
      _active={{}}
    />
  )
}

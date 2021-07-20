import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { AddIcon, ChevronDownIcon } from '@chakra-ui/icons'

export default function AddButton(props) {
  const { handleClick, type } = props

  const typeIcon =
    type === 'row' ? <AddIcon w={5} h={5} /> : <ChevronDownIcon w={14} h={14} />

  return (
    <IconButton
      color='yellow.100'
      variant='outline'
      borderColor='yellow.100'
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

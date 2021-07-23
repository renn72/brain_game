import React, { useContext } from 'react'
import { IconButton, Tooltip } from '@chakra-ui/react'
import { AddIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { ToolTipsContext } from '../context/ToolTipsContext'

export default function AddButton(props) {
  const { handleClick, type, display } = props
  const { toolTips } = useContext(ToolTipsContext)

  const typeIcon =
    type === 'row' || type === 'row1' ? (
      <AddIcon w={5} h={5} />
    ) : (
      <ChevronDownIcon w={14} h={14} />
    )

  let label = ''
  let placement = 'Bottom'
  if (type === 'row1') {
    label = 'extend the layer'
    placement = 'right'
  }
  if (type === 'stack') {
    label = 'add a new layer'
    placement = 'bottom'
  }

  const isVisible = display ? 'flex' : 'none'

  return (
    <Tooltip
      label={label}
      placement={placement}
      isOpen={toolTips && display}
      bg='blue.900'
      fontSize='2xl'
      color='yellow.400'
      borderWidth='1px'
      borderRadius='lg'
      borderColor='purple.100'
    >
      <IconButton
        color='purple.100'
        variant='outline'
        borderColor='purple.100'
        border='2px'
        d={isVisible}
        icon={typeIcon}
        onClick={handleClick}
        borderRadius='20px'
        _hover={{ borderColor: '#ccd0d5' }}
        _focus={{}}
        _active={{}}
      />
    </Tooltip>
  )
}

import React, { useContext } from 'react'
import { Img, ScaleFade, useDisclosure } from '@chakra-ui/react'
import { BrainContext } from '../context/BrainContext'

export default function Neuron(props) {
  const { shrinkRow } = useContext(BrainContext)
  const { index } = props
  const { isOpen } = useDisclosure(true)

  const handleClick = () => {
    setTimeout(() => {
      shrinkRow(index)
    }, 150)
  }

  return (
    <ScaleFade initialScale={0.1} in={!isOpen}>
      <Img
        boxSize='50px'
        src='/images/neuron400.png'
        alt='neuron'
        onClick={handleClick}
      />
    </ScaleFade>
  )
}

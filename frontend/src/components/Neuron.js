import React, { useContext } from 'react'
import { Img, ScaleFade, useDisclosure } from '@chakra-ui/react'
import { BrainContext } from '../context/BrainContext'

export default function Neuron(props) {
  const { brainShape, shrinkRow } = useContext(BrainContext)
  const { index } = props
  const { isOpen } = useDisclosure(true)

  const handleClick = () => {
    setTimeout(() => {
      shrinkRow(index)
    }, 150)
  }

  const neuronImage = () => {
    if (brainShape[index].type === 0) {
      return '/images/neuron401.png'
    } else if (brainShape[index].type === 1) {
      return '/images/neuron400.png'
    } else if (brainShape[index].type === 2) {
      return '/images/neuron402.png'
    } else if (brainShape[index].type === 3) {
      return '/images/neuron403.png'
    } else if (brainShape[index].type === 4) {
      return '/images/neuron404.png'
    }
  }

  return (
    <ScaleFade initialScale={0.1} in={!isOpen}>
      <Img
        boxSize='50px'
        src={neuronImage()}
        alt='neuron'
        onClick={handleClick}
      />
    </ScaleFade>
  )
}

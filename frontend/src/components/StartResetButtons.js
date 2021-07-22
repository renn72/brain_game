import React, { useContext, useState } from 'react'
import RingLoader from 'react-spinners/RingLoader'

import { Text, Button, Tooltip, useBoolean } from '@chakra-ui/react'

import { BrainContext } from '../context/BrainContext'
import { ToolTipsContext } from '../context/ToolTipsContext'
import { HighScoreContext } from '../context/HighScoreContext'

import sendModel from '../service_objects/sendModel'

import NewHighScore from './NewHighScore'

export default function StartResetButtons(props) {
  const { brainShape, resetBrain } = useContext(BrainContext)
  const { toolTips } = useContext(ToolTipsContext)
  const { highScore } = useContext(HighScoreContext)

  const [openNewHighScore, setOpenNewHighScore] = useBoolean()

  const [acc, setAcc] = useState(0)
  const [token, setToken] = useState()
  const { thinking, setThinking } = props

  const runButtonText = acc === 0 ? 'START' : `${acc} %`

  const handleStart = async () => {
    setThinking(true)

    sendModel(brainShape, setAcc, setThinking, setToken, highScore).then(
      (isHighScore) => {
        if (isHighScore) {
          setTimeout(() => setOpenNewHighScore.on(), 700)
        }
      }
    )
  }

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
            isLoading={thinking}
            spinner={<RingLoader />}
            onClick={handleStart}
          >
            <Text fontSize='4xl'>{runButtonText}</Text>
          </Button>
        </Tooltip>
      </div>
      <Tooltip
        label='reset the brain to 5 x 5'
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
          onMouseDown={() => setThinking(false)}
          _hover={{}}
          _focus={{}}
          _active={{}}
        >
          <Text fontSize='sm'>reset</Text>
        </Button>
      </Tooltip>
      <NewHighScore
        isOpen={openNewHighScore}
        onClose={setOpenNewHighScore}
        acc={acc}
        token={token}
      />
    </div>
  )
}

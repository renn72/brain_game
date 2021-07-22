import React, { useContext, useState } from 'react'
import {
  Text,
  Drawer,
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  SimpleGrid,
  Flex,
  Spacer,
  Box,
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

import { HighScoreContext } from '../context/HighScoreContext'

import sendHighScore from '../service_objects/sendHighScore'

export default function HighScore(props) {
  const { isOpen, onClose, acc, token } = props
  const { highScore, getHighScore } = useContext(HighScoreContext)
  const [name, setName] = useState(['_', '_', '_'])
  const [currentLetter, setCurrentLetter] = useState(0)

  const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ-./?!^'

  if (highScore.length < 1) {
    getHighScore()
  }

  const handleClick = (inputLetter) => {
    if (currentLetter === 0) {
      setName([inputLetter, name[1], name[2]])
      setCurrentLetter(1)
    } else if (currentLetter === 1) {
      setName([name[0], inputLetter, name[2]])
      setCurrentLetter(2)
    } else if (currentLetter === 2) {
      setName([name[0], name[1], inputLetter])
      setCurrentLetter(3)
    }
  }
  const handleHover = (inputLetter) => {
    if (currentLetter === 0) {
      setName([inputLetter, name[1], name[2]])
    } else if (currentLetter === 1) {
      setName([name[0], inputLetter, name[2]])
    } else if (currentLetter === 2) {
      setName([name[0], name[1], inputLetter])
    }
  }

  const handleDelete = () => {
    if (currentLetter === 3) {
      setName([name[0], name[1], '_'])
      setCurrentLetter(2)
    } else if (currentLetter === 2) {
      setName([name[0], '_', '_'])
      setCurrentLetter(1)
    } else if (currentLetter === 1) {
      setName(['_', '_', '_'])
      setCurrentLetter(0)
    }
  }

  const sendScore = () => {
    sendHighScore(name.join(''), token)
    onClose.off()
    setName(['_', '_', '_'])
    setCurrentLetter(0)
    getHighScore()
  }

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose.toggle}
        size='xl'
      >
        <DrawerOverlay />
        <DrawerContent bg='#161430' color='yellow.200' opacity={0.8}>
          <DrawerBody>
            <Flex flexDirection='column' h='92vh' alignItems='center'>
              <Text fontSize='5xl'>NEW HIGH SCORE</Text>
              <Flex>
                {name.map((letter, i) => (
                  <Text key={i} fontSize='8xl' mx={6}>
                    {letter}
                  </Text>
                ))}
              </Flex>
              <SimpleGrid w='100%' minChildWidth='90px'>
                {keys.split('').map((letter) => (
                  <Box
                    key={letter}
                    h='100px'
                    d='flex'
                    alignItems='center'
                    justifyContent='center'
                    _hover={{
                      borderWidth: '5px',
                      borderRadius: 'md',
                      borderColor: 'yellow.400',
                    }}
                    onMouseOver={() => handleHover(letter)}
                  >
                    <Text fontSize='7xl' onClick={() => handleClick(letter)}>
                      {letter}
                    </Text>
                  </Box>
                ))}
                <Box
                  w='94.spx'
                  h='100px'
                  d='flex'
                  alignItems='center'
                  justifyContent='center'
                  onClick={handleDelete}
                  _hover={{
                    borderWidth: '5px',
                    borderRadius: 'md',
                    borderColor: 'yellow.400',
                  }}
                >
                  <ArrowBackIcon w={20} h={20} />
                </Box>
              </SimpleGrid>
              <Spacer />
              <Button
                w={60}
                mb={16}
                fontSize='3xl'
                colorScheme='yellow'
                size='lg'
                isDisabled={currentLetter !== 3}
                onClick={sendScore}
              >
                SUBMIT
              </Button>
            </Flex>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

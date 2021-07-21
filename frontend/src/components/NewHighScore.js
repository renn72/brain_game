import React, { useContext } from 'react'
import {
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'

import { HighScoreContext } from '../context/HighScoreContext'

export default function HighScore(props) {
  const { isOpen, onClose } = props
  const { highScore, getHighScore } = useContext(HighScoreContext)

  if (highScore.length < 1) {
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
        <DrawerContent bg='#161430' color='yellow.100' opacity={0.9}>
          <DrawerHeader align='center' fontSize='5xl'>
            NEW HIGH SCORES
          </DrawerHeader>
          <DrawerBody fontSize='8xl'>
            <Text align='center'>_ _ _ </Text>
            <Text>
              A B C D E F G H I J K L M N O P Q R ST U V W X Y Z _ . / ? ! ^
            </Text>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

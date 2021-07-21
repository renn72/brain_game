import React, { useContext } from 'react'
import {
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Grid,
} from '@chakra-ui/react'

import { HighScoreContext } from '../context/HighScoreContext'
import { ToolTipsContext } from '../context/ToolTipsContext'

export default function HighScore(props) {
  const { isOpen, onClose } = props
  const { highScore, getHighScore } = useContext(HighScoreContext)

  if (highScore.length < 1) {
    getHighScore()
  }

  console.log(highScore)
  return (
    <>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg='#161430' color='yellow.100'>
          <DrawerCloseButton />
          <DrawerHeader align='center' fontSize='3xl'>
            HIGH SCORES
          </DrawerHeader>
          <DrawerBody>
            <Grid gap={4}>
              {highScore.map((score, i) => {
                return (
                  <Grid key={i} templateColumns='repeat(3, 1fr)'>
                    <Text fontSize='2xl' textAlign='center'>
                      {i + 1}
                    </Text>
                    <Text fontSize='2xl' textAlign='center'>
                      {score.name}
                    </Text>
                    <Text fontSize='2xl' textAlign='center'>
                      {score.score.toFixed(1)}
                    </Text>
                  </Grid>
                )
              })}
            </Grid>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

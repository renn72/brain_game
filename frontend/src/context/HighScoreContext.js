import React, { useState, createContext } from 'react'
import axios from 'axios'

export const HighScoreContext = createContext()

export const HighScoreProvider = ({ children }) => {
  const [highScore, setHighScore] = useState([])

  const getHighScore = async () => {
    const res = await axios.get('api/high_score')
    console.log(res.data)
    setHighScore(res.data)
  }

  return (
    <HighScoreContext.Provider value={{ highScore, getHighScore }}>
      {children}
    </HighScoreContext.Provider>
  )
}

import React, { useState, createContext } from 'react'
import axios from 'axios'

export const HighScoreContext = createContext()

export const HighScoreProvider = ({ children }) => {
  const [highScore, setHighScore] = useState([])

  const getHighScore = async () => {
    const res = await axios.get('api/high_score')
    setHighScore(res.data.slice(0, 10))
  }

  return (
    <HighScoreContext.Provider value={{ highScore, getHighScore }}>
      {children}
    </HighScoreContext.Provider>
  )
}

import { ReactNode, useState, createContext } from 'react'
import axios from 'axios'

const defaultHighScore = [
  {
    score: 1,
    name: 'aa',
  },
]

type HighScoreType = {
  highScore: typeof defaultHighScore
  getHighScore: () => void
}

export const HighScoreContext = createContext<HighScoreType | undefined>(
  undefined
)

type Props = {
  children: ReactNode
}

export const HighScoreProvider = ({ children }: Props) => {
  const [highScore, setHighScore] = useState(defaultHighScore)

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

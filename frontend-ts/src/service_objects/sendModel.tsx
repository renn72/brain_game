import axios from 'axios'

import highScoreCheck from './highScoreCheck'

interface ISendModel {
  brainShape: {
    type: number
    size: number
  }[]
  setAcc: (arg0: number) => void
  setThinking: (arg0: boolean) => void
  setToken: (arg0: string) => void
  highScore: {
    score: number
    name: string
  }[]
}

interface IRes {
  accuracy: string
  token: string
}

export default async function sendModel({
  brainShape,
  setAcc,
  setThinking,
  setToken,
  highScore,
}: ISendModel) {
  const actFunc = ['elu', 'relu', 'softmax', 'sigmoid', 'tanh']

  const data = brainShape.map((layer) => {
    return {
      units: layer.size * layer.size * 5,
      activation: actFunc[layer.type],
    }
  })

  console.log(data)

  return axios
    .post('/api/brain', data)
    .then((res) => {
      const { accuracy, token }: IRes = res.data
      setAcc(+Number(accuracy).toFixed(1))
      setToken(token)
      setThinking(false)
      return highScoreCheck(+accuracy, highScore)
    })
    .catch((err) => {
      console.error(err)
    })
}

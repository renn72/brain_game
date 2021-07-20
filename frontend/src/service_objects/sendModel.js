import axios from 'axios'

export default function sendModel(brainShape, setAcc) {
  const actFunc = 'relu'

  const data = brainShape.map((layer) => {
    return {
      units: layer * layer * 10,
      activation: actFunc,
    }
  })

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  console.log(data)
  axios
    .post('/api/brain', data, config)
    .then((res) => {
      console.log(res.data)
      setAcc((res.data * 100).toFixed(1))
    })
    .catch((err) => {
      console.error(err)
    })
}

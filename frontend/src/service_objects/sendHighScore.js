import axios from 'axios'

export default function sendModel(name, token) {
  const data = {
    name: name,
    token: token,
  }

  axios
    .post('/api/high_score', data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
}

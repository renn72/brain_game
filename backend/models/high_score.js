import fs from 'fs'
import hat from 'hat'

let highScoreTokens = []

const rack = hat.rack()

const HighScore = {
  async findAll() {
    const data = fs.readFileSync('./backend/models/high_score.json', 'utf8')
    const database = JSON.parse(data)
    return database.sort((a, b) => b.score - a.score)
  },

  async add(newScore) {
    let score = highScoreTokens.filter(
      (highScore) => highScore.token === newScore.token
    )
    if (score.length === 1) {
      const data = fs.readFileSync('./backend/models/high_score.json', 'utf8')
      const database = JSON.parse(data).sort((a, b) => b.score - a.score)
      database.push({ score: score[0].score, name: newScore.name })
      const newDatabase = JSON.stringify(database)
      fs.writeFileSync('./backend/models/high_score.json', newDatabase, 'utf8')
      highScoreTokens = highScoreTokens.filter(
        (highScore) => highScore.token !== newScore.token
      )
      console.log('added')
      return 'score added'
    } else {
      console.log('bah')
      return 'bad token'
    }
  },

  async checkHighScore(score) {
    const data = fs.readFileSync('./backend/models/high_score.json', 'utf8')
    const database = JSON.parse(data).sort((a, b) => b.score - a.score)

    const token = rack()

    if (score * 100 > database[9].score) {
      highScoreTokens.push({
        score: (score * 100).toFixed(1),
        token: token,
      })
      console.log(highScoreTokens)
    }
    return { accuracy: score, token: token }
  },
}

export default HighScore

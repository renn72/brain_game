import fs from 'fs'

const HighScore = {
  async findAll() {
    const data = fs.readFileSync('./backend/models/high_score.json', 'utf8')
    const database = JSON.parse(data)
    return database.sort((a, b) => b.score - a.score)
  },
  async add(newScore) {
    const data = fs.readFileSync('./backend/models/high_score.json', 'utf8')
    const database = JSON.parse(data)
    database.push(newScore)
    const newDatabase = JSON.stringify(
      database.sort((a, b) => b.score - a.score)
    )
    fs.writeFileSync('./backend/models/high_score.json', newDatabase, 'utf8')
    return true
  },
}

export default HighScore

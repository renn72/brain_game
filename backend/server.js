import express from 'express'

import morgan from 'morgan'
import dotenv from 'dotenv'
import path from 'path'

import errorHandler from './middlewares/error_handler.js'

import brainController from './controllers/brainController.js'
import highScoreController from './controllers/highScoreController.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/brain', brainController)
app.use('/api/high_score', highScoreController)

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve()

  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'))
  })
}

app.use(errorHandler)

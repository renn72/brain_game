import express from 'express'

import morgan from 'morgan'
import dotenv from 'dotenv'

import errorHandler from './middlewares/error_handler.js'

import brainController from './controllers/brainController.js'
// import highScoreController from './controllers/highScoreController.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.static('client'))

app.use(express.json())

app.use('/api/brain', brainController)
// app.use('/api/high-score', highScoreController)

app.use(errorHandler)

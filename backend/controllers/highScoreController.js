import express from 'express'
import validateHighScore from '../middlewares/validate_high_score.js'
import HighScore from '../models/high_score.js'

const router = express.Router()

router.get('/', (req, res) => {
  console.log(req.session)
  const dbResponse = HighScore.findAll()

  res.json(dbResponse)
})

router.post('/', validateHighScore, (req, res) => {
  Brain.create(req.body).then((accuracy) => {
    res.status(201).json(accuracy)
    console.log(accuracy)
  })
})

export default router

import express from 'express'
import validateBrain from '../middlewares/validate_brain.js'
import Brain from '../models/brain.js'
import HighScore from '../models/high_score.js'

const router = express.Router()

router.post('/', validateBrain, (req, res) => {
  Brain.create(req.body)
    .then((accuracy) => HighScore.checkHighScore(accuracy))
    .then((response) =>
      res.status(201).json({
        accuracy: (response.accuracy * 100).toFixed(1),
        token: response.token,
      })
    )
})

export default router

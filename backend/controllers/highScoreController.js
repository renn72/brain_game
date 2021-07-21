import express from 'express'
import validateHighScore from '../middlewares/validate_high_score.js'
import HighScore from '../models/high_score.js'

const router = express.Router()

router.get('/', (req, res) => {
  console.log(req.session)
  HighScore.findAll().then((dbResponse) => {
    // console.log(dbResponse)
    return res.json(dbResponse)
  })
})

router.post('/', validateHighScore, (req, res) => {
  HighScore.add(req.body).then((dbRes) => {
    console.log(dbRes)
    res.status(201).json({
      message: 'new score placed',
    })
  })
})

export default router

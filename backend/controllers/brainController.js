import express from 'express'
import validateBrain from '../middlewares/validate_brain.js'
import Brain from '../models/brain.js'

const router = express.Router()

router.post('/', validateBrain, (req, res) => {
  Brain.create(req.body).then((accuracy) => {
    res.status(201).json(accuracy)
    console.log(accuracy)
  })
})

export default router

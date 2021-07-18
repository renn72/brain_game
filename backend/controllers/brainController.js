import express from 'express'
import validateBrain from '../middlewares/validate_brain.js'
import Brain from '../models/brain.js'

const router = express.Router()

router.post('/', validateBrain, (req, res) => {
  Brain.create().then(() => {
    res.status(201).json()
  })
})

export default router

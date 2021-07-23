import runBrain from '../tensor/main.js'

const Brain = {
  async create(modelData) {
    return runBrain(+process.env.EPOCH, +process.env.BATCH, modelData)
  },
}

export default Brain

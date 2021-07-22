import runBrain from '../tensor/main.js'

const Brain = {
  async create(modelData) {
    return runBrain(2, 1024, modelData)
  },
}

export default Brain

import runBrain from '../tensor/main.js'
const Brain = {
  create() {
    return runBrain(1, 1024)
  },
}

export default Brain

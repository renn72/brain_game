import tf from '@tensorflow/tfjs-node'

import MnistDataset from './data.js'
import buildModel from './model.js'

const data = new MnistDataset()

// const { images: testImages, labels: testLabels } = data.getTestData()

async function runBrain(epochs, batchSize, modelData) {
  console.log('start:', tf.memory().numTensors)
  tf.engine().startScope()

  await data.loadData()
  const { images: trainImages, labels: trainLabels } = data.getTrainData()
  const model = buildModel(modelData)

  model.summary()

  const validationSplit = 0.2

  await model.fit(trainImages, trainLabels, {
    epochs,
    batchSize,
    validationSplit,
  })

  const evalOutput = model.evaluate(trainImages, trainLabels)

  console.log(
    `\nEvaluation result:\n` +
      `  Loss = ${evalOutput[0].dataSync()[0].toFixed(5)}; ` +
      `Accuracy = ${evalOutput[1].dataSync()[0].toFixed(5)}`
  )
  let accuracy = evalOutput[1].dataSync()[0].toFixed(3)

  // tf.dispose(model)

  tf.disposeVariables()
  tf.engine().endScope()
  console.log('end:', tf.memory().numTensors)
  return accuracy
}

export default runBrain

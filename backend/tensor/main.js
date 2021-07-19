import tf from '@tensorflow/tfjs-node'

import MnistDataset from './data.js'
import buildModel from './model.js'

const data = new MnistDataset()

async function runBrain(epochs, batchSize, modelData) {
  await data.loadData()

  const model = buildModel(modelData)

  const { images: trainImages, labels: trainLabels } = data.getTrainData()
  model.summary()

  const validationSplit = 0.2

  await model.fit(trainImages, trainLabels, {
    epochs,
    batchSize,
    validationSplit,
  })

  const { images: testImages, labels: testLabels } = data.getTestData()
  const evalOutput = model.evaluate(testImages, testLabels)

  console.log(
    `\nEvaluation result:\n` +
      `  Loss = ${evalOutput[0].dataSync()[0].toFixed(5)}; ` +
      `Accuracy = ${evalOutput[1].dataSync()[0].toFixed(5)}`
  )

  return evalOutput[1].dataSync()[0].toFixed(3)
}

export default runBrain

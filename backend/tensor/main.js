import tf from '@tensorflow/tfjs-node'
// const argparse = require('argparse')

import MnistDataset from './data.js'
import model from './model.js'

const data = new MnistDataset()

async function runBrain(epochs, batchSize) {
  await data.loadData()

  const { images: trainImages, labels: trainLabels } = data.getTrainData()
  model.summary()

  let epochBeginTime
  let millisPerStep
  const validationSplit = 0.2
  const numTrainExamplesPerEpoch = trainImages.shape[0] * (1 - validationSplit)
  const numTrainBatchesPerEpoch = Math.ceil(
    numTrainExamplesPerEpoch / batchSize
  )
  await model.fit(trainImages, trainLabels, {
    epochs,
    batchSize,
    validationSplit,
  })

  const { images: testImages, labels: testLabels } = data.getTestData()
  const evalOutput = model.evaluate(testImages, testLabels)

  console.log(
    `\nEvaluation result:\n` +
      `  Loss = ${evalOutput[0].dataSync()[0].toFixed(3)}; ` +
      `Accuracy = ${evalOutput[1].dataSync()[0].toFixed(3)}`
  )

  return evalOutput[1].dataSync()[0].toFixed(3)

  // if (modelSavePath != null) {
  //   await model.save(`file://${modelSavePath}`)
  //   console.log(`Saved model to path: ${modelSavePath}`)
  // }
}

// const parser = new argparse.ArgumentParser({
//   description: 'TensorFlow.js-Node MNIST Example.',
//   addHelp: true,
// })
// parser.addArgument('--epochs', {
//   type: 'int',
//   defaultValue: 1,
//   help: 'Number of epochs to train the model for.',
// })
// parser.addArgument('--batch_size', {
//   type: 'int',
//   defaultValue: 1024,
//   help: 'Batch size to be used during model training.',
// })
// parser.addArgument('--model_save_path', {
//   type: 'string',
//   help: 'Path to which the model will be saved after training.',
// })
// const args = parser.parseArgs()

// run(args.epochs, args.batch_size, args.model_save_path)

export default runBrain

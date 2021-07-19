import tf from '@tensorflow/tfjs'

const buildModel = (modelData) => {
  const model = tf.sequential()

  model.add(
    tf.layers.conv2d({
      inputShape: [28, 28, 1],
      filters: 8,
      kernelSize: 3,
      activation: 'relu',
    })
  )
  model.add(tf.layers.maxPooling2d({ poolSize: [2, 2] }))
  model.add(tf.layers.dropout({ rate: 0.25 }))
  model.add(tf.layers.flatten())

  modelData.forEach((layer) => {
    model.add(
      tf.layers.dense({ units: layer.units, activation: layer.activation })
    )
  })

  model.add(tf.layers.dense({ units: 10, activation: 'relu' }))

  const optimizer = 'adam'
  model.compile({
    optimizer: optimizer,
    loss: 'meanSquaredError',
    metrics: ['accuracy'],
  })
  return model
}

export default buildModel

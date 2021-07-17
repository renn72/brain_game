const tf = require('@tensorflow/tfjs')

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

model.add(tf.layers.flatten())
model.add(tf.layers.dropout({ rate: 0.25 }))
model.add(tf.layers.dense({ units: 512, activation: 'relu' }))
model.add(tf.layers.dropout({ rate: 0.5 }))
model.add(tf.layers.dense({ units: 10, activation: 'relu' }))

const optimizer = 'rmsprop'
model.compile({
  optimizer: optimizer,
  loss: 'categoricalCrossentropy',
  metrics: ['accuracy'],
})

module.exports = model

import React, { useState, createContext } from 'react'

export const BrainContext = createContext()

export const BrainProvider = ({ children }) => {
  const [brainShape, setBrainShape] = useState([
    { type: 1, size: 4 },
    { type: 1, size: 4 },
    { type: 1, size: 4 },
    { type: 1, size: 4 },
  ])

  const addRow = () =>
    setBrainShape([
      ...brainShape,
      {
        type: brainShape[brainShape.length - 1].type,
        size: brainShape[brainShape.length - 1].size,
      },
    ])

  const removeRow = () => setBrainShape([...brainShape.slice(0, -1)])

  const extendRow = (row) => {
    const newBrainShape = brainShape
    newBrainShape[row].size++
    setBrainShape([...newBrainShape])
  }
  const shrinkRow = (row) => {
    const newBrainShape = brainShape
    newBrainShape[row].size--

    newBrainShape[row].size > 0
      ? setBrainShape([...newBrainShape])
      : setBrainShape([
          ...newBrainShape.filter((value, index) => row !== index),
        ])
  }
  const changeType = (row) => {
    const newBrainShape = brainShape

    if (newBrainShape[row].type === 4) {
      newBrainShape[row].type = 0
    } else {
      newBrainShape[row].type++
    }
    setBrainShape([...newBrainShape])
  }
  const resetBrain = () => {
    setBrainShape([
      { type: 1, size: 4 },
      { type: 1, size: 4 },
      { type: 1, size: 4 },
      { type: 1, size: 4 },
    ])
  }

  return (
    <BrainContext.Provider
      value={{
        brainShape,
        addRow,
        removeRow,
        extendRow,
        shrinkRow,
        resetBrain,
        changeType,
      }}
    >
      {children}
    </BrainContext.Provider>
  )
}

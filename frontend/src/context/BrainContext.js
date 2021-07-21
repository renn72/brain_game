import React, { useState, createContext } from 'react'

export const BrainContext = createContext()

export const BrainProvider = ({ children }) => {
  const [brainShape, setBrainShape] = useState([3, 3, 3])

  const addRow = () =>
    setBrainShape([...brainShape, brainShape[brainShape.length - 1]])

  const removeRow = () => setBrainShape([...brainShape.slice(0, -1)])

  const extendRow = (row) => {
    const newBrainShape = brainShape
    newBrainShape[row]++
    setBrainShape([...newBrainShape])
  }
  const shrinkRow = (row) => {
    const newBrainShape = brainShape
    newBrainShape[row]--

    newBrainShape[row] > 0
      ? setBrainShape([...newBrainShape])
      : setBrainShape([
          ...newBrainShape.filter((value, index) => row !== index),
        ])
  }
  const resetBrain = () => {
    setBrainShape([3, 3, 3])
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
      }}
    >
      {children}
    </BrainContext.Provider>
  )
}

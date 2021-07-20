import React, { useState, createContext } from 'react'

export const BrainContext = createContext()

export const BrainProvider = ({ children }) => {
  const [brainShape, setBrainShape] = useState([4, 3, 2, 1])

  const addRow = () => setBrainShape([...brainShape, 1])

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

  return (
    <BrainContext.Provider
      value={{ brainShape, addRow, removeRow, extendRow, shrinkRow }}
    >
      {children}
    </BrainContext.Provider>
  )
}

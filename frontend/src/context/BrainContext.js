import React, { useState, createContext } from 'react'

export const BrainContext = createContext()

export const BrainProvider = ({ children }) => {
  const [brainShape, setBrainShape] = useState([3, 3, 3])

  const addRow = () => setBrainShape([...brainShape, 3])

  const removeRow = () => setBrainShape([...brainShape.slice(0, -1)])

  return (
    <BrainContext.Provider value={{ brainShape, addRow, removeRow }}>
      {children}
    </BrainContext.Provider>
  )
}

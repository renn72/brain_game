import { useState, createContext, ReactNode } from 'react'

const defaultBrainShape = [
  { type: 1, size: 4 },
  { type: 1, size: 4 },
  { type: 1, size: 4 },
  { type: 1, size: 4 },
]

type BrainContextType = {
  brainShape: typeof defaultBrainShape
  addRow: () => void
  removeRow: () => void
  extendRow: (row: number) => void
  shrinkRow: (row: number) => void
  resetBrain: () => void
  changeType: (row: number) => void
}

export const BrainContext = createContext<BrainContextType | undefined>(
  undefined
)

type Props = {
  children: ReactNode
}

export const BrainProvider = ({ children }: Props) => {
  const [brainShape, setBrainShape] = useState(defaultBrainShape)

  const addRow = () =>
    setBrainShape([
      ...brainShape,
      {
        type: brainShape[brainShape.length - 1].type,
        size: brainShape[brainShape.length - 1].size,
      },
    ])

  const removeRow = () => setBrainShape([...brainShape.slice(0, -1)])

  const extendRow = (row: number) => {
    const newBrainShape = brainShape
    newBrainShape[row].size++
    setBrainShape([...newBrainShape])
  }
  const shrinkRow = (row: number) => {
    const newBrainShape = brainShape
    newBrainShape[row].size--

    newBrainShape[row].size > 0
      ? setBrainShape([...newBrainShape])
      : setBrainShape([
          ...newBrainShape.filter((value, index) => row !== index),
        ])
  }
  const changeType = (row: number) => {
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

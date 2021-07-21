import React, { createContext } from 'react'
import { useBoolean } from '@chakra-ui/react'

export const ToolTipsContext = createContext()

export const ToolTipsProvider = ({ children }) => {
  const [toolTips, setToolTips] = useBoolean(false)

  return (
    <ToolTipsContext.Provider value={{ toolTips, setToolTips }}>
      {children}
    </ToolTipsContext.Provider>
  )
}

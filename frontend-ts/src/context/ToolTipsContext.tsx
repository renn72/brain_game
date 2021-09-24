import { createContext, ReactNode } from 'react'
import { useBoolean } from '@chakra-ui/react'

type ToolTipsType = {
  toolTips: boolean
  setToolTips: {
    readonly on: () => void
    readonly off: () => void
    readonly toggle: () => void
  }
}

export const ToolTipsContext = createContext<ToolTipsType | undefined>(
  undefined
)

type Props = {
  children: ReactNode
}

export const ToolTipsProvider = ({ children }: Props) => {
  const [toolTips, setToolTips] = useBoolean(false)

  return (
    <ToolTipsContext.Provider value={{ toolTips, setToolTips }}>
      {children}
    </ToolTipsContext.Provider>
  )
}

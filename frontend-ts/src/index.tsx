import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { BrainProvider } from './context/BrainContext'
import { HighScoreProvider } from './context/HighScoreContext'
import { ToolTipsProvider } from './context/ToolTipsContext'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './themes/theme'

ReactDOM.render(
  <React.StrictMode>
    <BrainProvider>
      <HighScoreProvider>
        <ToolTipsProvider>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </ToolTipsProvider>
      </HighScoreProvider>
    </BrainProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Righteous',
    body: 'Righteous',
  },
  colors: {
    blue: {
      900: '#161430',
    },
    purple: {
      100: '#9A879D',
    },
  },
  shadows: {
    outline: '0 0 0 3px #161430',
  },
})

export default theme

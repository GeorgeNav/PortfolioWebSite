import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from 'components/App'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Ubuntu',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#000049',
    },
    secondary: {
      main: '#008A00',
    },
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)

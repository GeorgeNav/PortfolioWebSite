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
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)

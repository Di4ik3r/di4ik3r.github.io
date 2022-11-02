import React from 'react'
import ReactDOM from 'react-dom/client'

import Router from './components/Router'
import reportWebVitals from './reportWebVitals'

import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const root = ReactDOM.createRoot(document.getElementById('root'))

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

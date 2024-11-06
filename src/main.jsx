import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Routes } from './Routes/index.jsx'

import { AuthProvider } from './hooks/auth'
import { ThemeProvider } from 'styled-components'
import  GlobalStyle  from './styles/global.js'
import theme from './styles/theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      
    <GlobalStyle />
    <AuthProvider>
      <Routes /> 
    </AuthProvider>

    </ThemeProvider>
  </StrictMode>,
)
 
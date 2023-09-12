// Sharing context between themes

import React from 'react'
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { Box, ThemeProvider } from '@mui/material'

import { DarkTheme, LightTheme } from '../themes'

interface IThemeContextData {
  themeName: 'light' | 'dark'
  toggleTheme: () => void
}

interface IAppThemeProvideProps {
  children: React.ReactNode
}

const ThemeContext = createContext({} as IThemeContextData)

// Added customized hook.
// A function to return the IThemeContextData properties
// This will enable do use the toggle to change our Light or Dark mode.
export const useAppThemeContext = () => {
  return useContext(ThemeContext)
}

export const AppThemeProvider: React.FC<IAppThemeProvideProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light')

  // store functions in react memory, and was update when var inside dependency array is updated
  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
  }, [])

  // Always the themeName was changed a new theme value is storaged.
  const theme = useMemo(() => {
    if (themeName === 'light') {
      return LightTheme
    }
    return DarkTheme
  }, [themeName])

  return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width='100vw' height={'100vh'} bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
  )
}

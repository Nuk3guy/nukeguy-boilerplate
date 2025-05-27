'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useTheme } from 'next-themes'
import { lightTheme, darkTheme } from '@/lib/theme'
import { useEffect, useState } from 'react'

function MuiThemeWrapper({ children }) {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a default theme during SSR
    return (
      <MuiThemeProvider theme={lightTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    )
  }

  const currentTheme = theme === 'system' ? systemTheme : theme
  const muiTheme = currentTheme === 'dark' ? darkTheme : lightTheme

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <MuiThemeWrapper>{children}</MuiThemeWrapper>
    </NextThemesProvider>
  )
}

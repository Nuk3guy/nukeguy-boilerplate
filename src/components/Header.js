'use client'

import { AppBar, Toolbar } from '@mui/material'
import { ThemeToggle } from '@/components/ThemeToggle'

export function Header() {
  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        backgroundColor: 'transparent',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  )
}

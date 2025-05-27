'use client'

import { Box, Typography, Container, IconButton } from '@mui/material'
import { GitHub, Instagram, Email } from '@mui/icons-material'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        borderTop: '1px solid',
        borderColor: 'divider',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark'
            ? 'rgba(0, 0, 0, 0.5)'
            : 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2025 NukeGuy Boilerplate. Built with ❤️ for the community.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                href="https://github.com/Nuk3guy"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: '#00d4ff',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                <GitHub fontSize="small" />
              </IconButton>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                href="https://instagram.com/Nuk3guy"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: '#00d4ff',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                <Instagram fontSize="small" />
              </IconButton>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                href="mailto:nukeguy@gmail.com"
                size="small"
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: '#00d4ff',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                <Email fontSize="small" />
              </IconButton>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

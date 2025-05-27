'use client';

import { Box, Typography, Container, AppBar, Toolbar, IconButton } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const rotatingWords = ['Boilerplate', 'Stack', 'Goodies', 'Weapons'];

export default function HomePage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>

      {/* Main Content */}
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            py: 8,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                lineHeight: 1.1,
                mb: 4,
              }}
            >
              <motion.span
                style={{
                  background: 'linear-gradient(45deg, #00d4ff 30%, #0099cc 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                NukeGuy's
              </motion.span>
              <br />
              <motion.span
                style={{
                  background: 'linear-gradient(45deg, #00d4ff 30%, #0099cc 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
                animate={{
                  backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 0.5,
                }}
              >
                Handpicked
              </motion.span>
              <br />
              <Box sx={{ height: { xs: '60px', sm: '80px', md: '100px', lg: '120px' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[currentWordIndex]}
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -50, rotateX: 90 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    style={{
                      background: 'linear-gradient(90deg, #00d4ff, #0099cc, #00d4ff)',
                      backgroundSize: '200% 100%',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block',
                      textShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
                    }}
                  >
                    <motion.span
                      animate={{
                        backgroundPosition: ['0% 50%', '200% 50%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      style={{
                        background: 'linear-gradient(90deg, #00d4ff, #0099cc, #00d4ff)',
                        backgroundSize: '200% 100%',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block',
                      }}
                    >
                      {rotatingWords[currentWordIndex]}
                    </motion.span>
                  </motion.span>
                </AnimatePresence>
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.9rem', lg: '1.2rem' },
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Javscript/Jsx
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 400,
                color: 'text.secondary',
                maxWidth: '600px',
                mb: 6,
                fontSize: { xs: '1.1rem', sm: '1.0rem' },
              }}
            >
              A modern, production-ready boilerplate with Next.js 15, Material UI,
              Tailwind 4, Supabase, and Prisma - perfectly integrated for 2025 development.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          >
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                'Next.js 15',
                'Material UI',
                'Tailwind 4',
                'Supabase',
                'Prisma',
                'Framer Motion',
                'React Hook Form',
                'Zod',
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Box
                    sx={{
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      background: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(0, 153, 204, 0.1))'
                          : 'linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(0, 153, 204, 0.1))',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid',
                      borderColor: 'rgba(0, 212, 255, 0.3)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.2), transparent)',
                        transition: 'left 0.5s ease',
                      },
                      '&:hover::before': {
                        left: '100%',
                      },
                    }}
                  >
                    {tech}
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>
    </>
  );
}

import { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Container, Button, Box, IconButton, Drawer,
  List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme, Divider,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../hooks/useLanguage';
import translations from '../data/translations';

const navItems = ['home', 'about', 'highlights', 'events', 'timeline', 'gallery', 'statistics', 'guide', 'faq', 'contact'];

const Navbar = () => {
  const { language } = useLanguage();
  const t = translations[language].nav;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled
            ? 'rgba(255, 255, 255, 0.92)'
            : 'rgba(255, 255, 255, 0)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          ...(!scrolled ? {
            '&::before': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: '5%',
              right: '5%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            },
          } : {}),
        }}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: 72, display: 'flex', alignItems: 'center' }}>
            {/* Logo */}
            <Box
              onClick={() => scrollTo('home')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                mr: 4,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 1.5,
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                E
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Box sx={{ fontWeight: 700, fontSize: '1rem', color: scrolled ? '#263238' : '#FFFFFF', lineHeight: 1.2 }}>
                  UDON THANI EXPO
                </Box>
                <Box sx={{ fontWeight: 400, fontSize: '0.65rem', color: scrolled ? 'primary.main' : 'rgba(255,255,255,0.8)', letterSpacing: '0.1em' }}>
                  2026
                </Box>
              </Box>
            </Box>

            {/* Desktop Nav */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flex: 1, justifyContent: 'center' }}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    onClick={() => scrollTo(item)}
                    sx={{
                      color: scrolled ? 'text.primary' : 'rgba(255,255,255,0.9)',
                      fontWeight: 500,
                      fontSize: '0.85rem',
                      px: 1.5,
                      py: 0.75,
                      borderRadius: 2,
                      '&:hover': {
                        backgroundColor: scrolled
                          ? 'rgba(46, 125, 50, 0.08)'
                          : 'rgba(255,255,255,0.12)',
                        color: scrolled ? 'primary.main' : '#FFFFFF',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {t[item]}
                  </Button>
                ))}
              </Box>
            )}

            {/* Right section */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto' }}>
              <LanguageSwitcher />
              {isMobile && (
                <IconButton
                  onClick={() => setDrawerOpen(true)}
                  sx={{
                    color: scrolled ? 'text.primary' : '#FFFFFF',
                    '&:hover': { backgroundColor: scrolled ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)' },
                  }}
                  aria-label="Open menu"
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            borderRadius: '16px 0 0 16px',
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setDrawerOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ px: 1 }}>
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ListItem disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  onClick={() => scrollTo(item)}
                  sx={{
                    borderRadius: 2,
                    py: 1.5,
                    '&:hover': { backgroundColor: 'rgba(46, 125, 50, 0.08)' },
                  }}
                >
                  <ListItemText
                    primary={t[item]}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      fontSize: '1rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;

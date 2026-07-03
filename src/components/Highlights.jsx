import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import translations from '../data/translations';
import {
  LocalFlorist, Public, MusicNote, Grass, Restaurant, NightsStay, FamilyRestroom,
} from '@mui/icons-material';

const iconMap = [
  <LocalFlorist />,
  <Public />,
  <MusicNote />,
  <Grass />,
  <Restaurant />,
  <NightsStay />,
  <FamilyRestroom />,
];

const Highlights = () => {
  const { language } = useLanguage();
  const t = translations[language].highlights;

  return (
    <Box
      id="highlights"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#FFFFFF',
        position: 'relative',
      }}
    >
      {/* Background pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 300,
          background: 'linear-gradient(180deg, #F5FFF6 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                letterSpacing: '0.15em',
                fontSize: '0.85rem',
                mb: 1,
                display: 'block',
              }}
            >
              {language === 'th' ? 'ไฮไลท์' : language === 'zh' ? '精彩亮点' : 'Highlights'}
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontWeight: 700, color: '#10351E', mb: 2 }}
            >
              {t.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ maxWidth: 600, mx: 'auto', color: 'text.secondary' }}
            >
              {t.subtitle}
            </Typography>
          </Box>
        </motion.div>

        {/* Cards Grid */}
        <Grid container spacing={3}>
          {t.items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 4,
                    border: '1px solid rgba(46, 125, 50, 0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 12px 40px rgba(46, 125, 50, 0.12)',
                      borderColor: 'rgba(46, 125, 50, 0.2)',
                      '& .highlight-icon': {
                        transform: 'scale(1.1) rotate(-5deg)',
                        background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                      },
                    },
                  }}
                >
                  <Box
                    className="highlight-icon"
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)',
                      color: '#FFFFFF',
                      mb: 2.5,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    {React.cloneElement(iconMap[index % iconMap.length], { sx: { fontSize: 28 } })}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#10351E', mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {item.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Highlights;

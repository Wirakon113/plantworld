import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import translations from '../data/translations';
import {
  CalendarMonth, LocationOn, AccessTime, ConfirmationNumber, DirectionsBus,
} from '@mui/icons-material';

const EventInfo = () => {
  const { language } = useLanguage();
  const t = translations[language].eventInfo;

  const cards = [
    {
      icon: <CalendarMonth />,
      titles: [t.openingDate, t.closingDate],
      values: [t.openingDateValue, t.closingDateValue],
      color: '#2E7D32',
    },
    {
      icon: <LocationOn />,
      titles: [t.location],
      values: [t.locationValue],
      color: '#4CAF50',
    },
    {
      icon: <AccessTime />,
      titles: [t.hours],
      values: [t.hoursValue],
      color: '#81C784',
    },
    {
      icon: <ConfirmationNumber />,
      titles: [t.ticket],
      values: [t.ticketValue],
      color: '#D4AF37',
    },
    {
      icon: <DirectionsBus />,
      titles: [t.transportation],
      values: [t.transportationValue],
      color: '#10351E',
    },
  ];

  return (
    <Box
      id="events"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F5FFF6 100%)',
      }}
    >
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
              {language === 'th' ? 'ข้อมูลงาน' : language === 'zh' ? '活动信息' : 'Event Info'}
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 700, color: '#10351E', mb: 2 }}>
              {t.title}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', color: 'text.secondary' }}>
              {t.subtitle}
            </Typography>
          </Box>
        </motion.div>

        {/* Info Cards */}
        <Grid container spacing={3}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3.5,
                    height: '100%',
                    borderRadius: 4,
                    border: `1px solid ${card.color}15`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 12px 40px ${card.color}15`,
                      borderColor: `${card.color}30`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `${card.color}12`,
                      color: card.color,
                      mb: 2.5,
                    }}
                  >
                    {React.cloneElement(card.icon, { sx: { fontSize: 28 } })}
                  </Box>
                  {card.titles.map((title, i) => (
                    <Box key={i} sx={{ mb: card.titles.length > 1 && i === 0 ? 2 : 0 }}>
                      <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 0.5, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#10351E',
                          fontWeight: 500,
                          whiteSpace: 'pre-line',
                          lineHeight: 1.6,
                          fontSize: '0.95rem',
                        }}
                      >
                        {card.values[i]}
                      </Typography>
                    </Box>
                  ))}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default EventInfo;

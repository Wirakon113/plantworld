import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import translations from '../data/translations';
import { Construction, Celebration, Event, Flag } from '@mui/icons-material';

const iconMap = [Construction, Celebration, Event, Flag];

const TimelineSection = () => {
  const { language } = useLanguage();
  const t = translations[language].timeline;

  return (
    <Box
      id="timeline"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#F5FFF6',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative line */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: 1,
          background: 'linear-gradient(180deg, transparent, rgba(46,125,50,0.2), transparent)',
          display: { xs: 'none', md: 'block' },
          transform: 'translateX(-50%)',
        }}
      />

      <Container maxWidth="md">
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
              {language === 'th' ? 'ไทม์ไลน์' : language === 'zh' ? '时间线' : 'Timeline'}
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 700, color: '#10351E', mb: 2 }}>
              {t.title}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 500, mx: 'auto', color: 'text.secondary' }}>
              {t.subtitle}
            </Typography>
          </Box>
        </motion.div>

        <Timeline position="alternating">
          {t.items.map((item, index) => {
            const Icon = iconMap[index];
            return (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: index * 0.2 }}
                  >
                    <TimelineDot
                      sx={{
                        width: 56,
                        height: 56,
                        margin: 0,
                        background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                        boxShadow: '0 4px 15px rgba(46,125,50,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon sx={{ color: '#FFFFFF', fontSize: 24 }} />
                    </TimelineDot>
                  </motion.div>
                  {index < t.items.length - 1 && (
                    <TimelineConnector
                      sx={{
                        backgroundColor: 'rgba(46,125,50,0.2)',
                        width: 2,
                        minHeight: 80,
                      }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        border: '1px solid rgba(46,125,50,0.1)',
                        backgroundColor: '#FFFFFF',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 8px 30px rgba(46,125,50,0.1)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      <Typography
                        variant="overline"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          letterSpacing: '0.1em',
                        }}
                      >
                        {item.date}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#10351E', mt: 0.5, mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', whiteSpace: 'pre-line', lineHeight: 1.7 }}>
                        {item.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>
    </Box>
  );
};

export default TimelineSection;

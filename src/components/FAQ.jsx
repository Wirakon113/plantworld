import React, { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import translations from '../data/translations';
import { Add, Remove } from '@mui/icons-material';

const FAQ = () => {
  const { language } = useLanguage();
  const t = translations[language].faq;
  const [expandedPanel, setExpandedPanel] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #F5FFF6 0%, #FFFFFF 100%)',
      }}
    >
      <Container maxWidth="md">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
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
              {language === 'th' ? 'คำถามที่พบบ่อย' : language === 'zh' ? '常见问题' : 'FAQ'}
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 700, color: '#10351E', mb: 2 }}>
              {t.title}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 500, mx: 'auto', color: 'text.secondary' }}>
              {t.subtitle}
            </Typography>
          </Box>
        </motion.div>

        {/* Accordion List */}
        <Box sx={{ position: 'relative' }}>
          {t.items.map((item, index) => {
            const isExpanded = expandedPanel === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Accordion
                  expanded={isExpanded}
                  onChange={handleChange(index)}
                  elevation={0}
                  sx={{
                    '&.Mui-expanded': {
                      boxShadow: '0 4px 20px rgba(46, 125, 50, 0.08)',
                      borderColor: 'rgba(46, 125, 50, 0.2)',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      isExpanded ? (
                        <Remove sx={{ color: 'primary.main', fontSize: 20 }} />
                      ) : (
                        <Add sx={{ color: 'text.secondary', fontSize: 20 }} />
                      )
                    }
                    sx={{
                      '&.Mui-expanded': {
                        backgroundColor: 'rgba(46, 125, 50, 0.03)',
                        borderBottom: '1px solid rgba(46, 125, 50, 0.08)',
                      },
                      '& .MuiAccordionSummary-content': {
                        py: 1,
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: 1.5,
                          backgroundColor: isExpanded ? 'rgba(46, 125, 50, 0.1)' : 'rgba(0,0,0,0.04)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: isExpanded ? 'primary.main' : 'text.secondary',
                          fontWeight: 700,
                          fontSize: '0.8rem',
                          transition: 'all 0.2s ease',
                          flexShrink: 0,
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: isExpanded ? 'primary.main' : '#263238',
                          fontSize: '1rem',
                        }}
                      >
                        {item.question}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.8,
                        px: 7,
                        py: 1,
                      }}
                    >
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;

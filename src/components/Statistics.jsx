import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import translations from '../data/translations';
import { Public, Groups, LocalFlorist, EmojiEvents } from '@mui/icons-material';

const AnimatedCounter = ({ target, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    const numericTarget = parseFloat(target);
    if (isNaN(numericTarget)) {
      // For string values like "20+", "3.6M", just show it
      setCount(target);
      return;
    }

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * numericTarget);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target); // Ensure final value
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  // For non-numeric targets like "20+", "3.6M"
  if (typeof count === 'string') {
    return <span>{count}</span>;
  }

  return <span>{count}{suffix}</span>;
};

const Statistics = () => {
  const { language } = useLanguage();
  const t = translations[language].statistics;

  const stats = [
    { icon: <Public />, display: t.countriesValue, label: t.countries, animate: false },
    { icon: <Groups />, display: t.visitorsValue, label: t.visitors, animate: true, animateTarget: 3600000, suffix: '+' },
    { icon: <LocalFlorist />, display: t.flowersValue, label: t.flowers, animate: true, animateTarget: 10000, suffix: '+' },
    { icon: <EmojiEvents />, display: t.activitiesValue, label: t.activities, animate: true, animateTarget: 200, suffix: '+' },
  ];

  return (
    <Box
      id="statistics"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #0A2A14 0%, #1B5E20 50%, #10351E 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative circles */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(46,125,50,0.2) 0%, transparent 70%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -150,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
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
                color: '#81C784',
                fontWeight: 600,
                letterSpacing: '0.15em',
                fontSize: '0.85rem',
                mb: 1,
                display: 'block',
              }}
            >
              {language === 'th' ? 'ตัวเลขสำคัญ' : language === 'zh' ? '关键数据' : 'Key Numbers'}
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 700, color: '#FFFFFF', mb: 2 }}>
              {t.title}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 500, mx: 'auto', color: 'rgba(255,255,255,0.7)' }}>
              {t.subtitle}
            </Typography>
          </Box>
        </motion.div>

        {/* Stats Grid */}
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#D4AF37',
                      mx: 'auto',
                      mb: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px) scale(1.05)',
                        background: 'rgba(212,175,55,0.15)',
                        borderColor: 'rgba(212,175,55,0.3)',
                      },
                    }}
                  >
                    {React.cloneElement(stat.icon, { sx: { fontSize: 32 } })}
                  </Box>
                  <Typography
                    variant="h2"
                    sx={{
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: { xs: '2rem', md: '3.5rem' },
                      lineHeight: 1.1,
                      mb: 1,
                    }}
                  >
                    {stat.animate ? (
                        <AnimatedCounter
                          target={stat.animateTarget}
                          suffix={stat.suffix}
                        />
                      ) : (
                        stat.display
                      )}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', fontWeight: 400 }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Statistics;

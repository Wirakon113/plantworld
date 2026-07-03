import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import translations from '../data/translations';
import { ArrowForward, PlayArrow } from '@mui/icons-material';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#0A2A14',
      }}
    >
      {/* Background Image with Parallax */}
      <Box
        component={motion.div}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://static.naewna.com/uploads/news/source/836232.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'translateZ(0)',
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(10,42,20,0.85) 0%, rgba(16,53,30,0.7) 40%, rgba(46,125,50,0.5) 100%)',
          },
        }}
      />

      {/* Decorative floating elements */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(3)].map((_, i) => (
          <Box
            component={motion.div}
            key={i}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
            sx={{
              position: 'absolute',
              width: 80 + i * 40,
              height: 80 + i * 40,
              borderRadius: '50%',
              border: '2px solid rgba(212, 175, 55, 0.15)',
              top: `${20 + i * 25}%`,
              left: `${10 + i * 30}%`,
            }}
          />
        ))}
      </Box>

      {/* Content */}
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
        <Box sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1,
                borderRadius: 50,
                backgroundColor: 'rgba(212, 175, 55, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                mb: 4,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#D4AF37',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.4 },
                  },
                }}
              />
              <Typography
                sx={{
                  color: '#D4AF37',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                {language === 'th' ? 'AIPH รับรอง ระดับ A2' : language === 'zh' ? 'AIPH认证A2级国际博览会' : 'AIPH-Approved Category B'}
              </Typography>
            </Box>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h1"
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                mb: 3,
                textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                whiteSpace: 'pre-line',
              }}
            >
              {t.title}
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: { xs: '1rem', md: '1.25rem' },
                lineHeight: 1.6,
                maxWidth: 700,
                mx: 'auto',
                mb: 5,
                fontWeight: 300,
                letterSpacing: '0.02em',
              }}
            >
              {t.subtitle}
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                onClick={() => scrollToSection('events')}
                sx={{
                  px: 4,
                  py: 1.75,
                  fontSize: '1.05rem',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #E0C55B 100%)',
                  color: '#10351E',
                  fontWeight: 700,
                  boxShadow: '0 8px 30px rgba(212, 175, 55, 0.4)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #E0C55B 0%, #D4AF37 100%)',
                    boxShadow: '0 12px 40px rgba(212, 175, 55, 0.5)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                {t.primaryBtn}
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayArrow />}
                onClick={() => scrollToSection('about')}
                sx={{
                  px: 4,
                  py: 1.75,
                  fontSize: '1.05rem',
                  borderColor: 'rgba(255,255,255,0.4)',
                  borderWidth: 2,
                  color: '#FFFFFF',
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    borderWidth: 2,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                {t.secondaryBtn}
              </Button>
            </Stack>
          </motion.div>
        </Box>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          cursor: 'pointer',
        }}
        onClick={() => scrollToSection('about')}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Box
            sx={{
              width: 24,
              height: 40,
              borderRadius: 12,
              border: '2px solid rgba(255,255,255,0.4)',
              display: 'flex',
              justifyContent: 'center',
              pt: 1,
            }}
          >
            <Box
              sx={{
                width: 3,
                height: 8,
                borderRadius: 2,
                backgroundColor: '#FFFFFF',
                animation: 'scrollDot 2s infinite',
                '@keyframes scrollDot': {
                  '0%': { opacity: 1, transform: 'translateY(0)' },
                  '100%': { opacity: 0, transform: 'translateY(12px)' },
                },
              }}
            />
          </Box>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.7rem',
              mt: 1,
              textAlign: 'center',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {t.scrollText}
          </Typography>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Hero;

import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import translations from '../data/translations';
import { Visibility, TrackChanges, EmojiNature, Stars } from '@mui/icons-material';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.7, ease: 'easeOut' },
};

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  const cards = [
    {
      icon: <Visibility sx={{ fontSize: 36 }} />,
      title: t.vision.title,
      text: t.vision.text,
      color: '#2E7D32',
    },
    {
      icon: <TrackChanges sx={{ fontSize: 36 }} />,
      title: t.mission.title,
      text: t.mission.text,
      color: '#4CAF50',
    },
    {
      icon: <Stars sx={{ fontSize: 36 }} />,
      title: t.objectives.title,
      text: t.objectives.items.slice(0, 3).join(' • '),
      color: '#D4AF37',
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #F5FFF6 0%, #FFFFFF 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(46,125,50,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl">
        {/* Section Header */}
        <motion.div {...fadeUp}>
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
              {language === 'th' ? 'รู้จักมหกรรม' : language === 'zh' ? '了解博览会' : 'Discover the Expo'}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: '#10351E',
                mb: 2,
              }}
            >
              {t.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 700,
                mx: 'auto',
                color: 'text.secondary',
                fontSize: '1.1rem',
              }}
            >
              {t.subtitle}
            </Typography>
          </Box>
        </motion.div>

        {/* Vision, Mission, Objectives Cards */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {cards.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 4,
                    background: `linear-gradient(135deg, ${card.color}08 0%, ${card.color}02 100%)`,
                    border: `1px solid ${card.color}15`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 60px ${card.color}15`,
                      borderColor: `${card.color}30`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `linear-gradient(135deg, ${card.color} 0%, ${card.color}CC 100%)`,
                      color: '#FFFFFF',
                      mb: 3,
                    }}
                  >
                    {card.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: '#10351E', mb: 2 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {card.text}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Importance Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <Box
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, #10351E 0%, #1B5E20 100%)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative elements */}
            <Box
              sx={{
                position: 'absolute',
                top: -50,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: -30,
                left: -30,
                width: 150,
                height: 150,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(129,199,132,0.1) 0%, transparent 70%)',
              }}
            />

            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3, position: 'relative', zIndex: 1 }}>
              <EmojiNature sx={{ color: '#D4AF37', fontSize: 32 }} />
              <Typography variant="h4" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
                {t.importance.title}
              </Typography>
            </Stack>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                position: 'relative',
                zIndex: 1,
              }}
            >
              {t.importance.text}
            </Typography>

            {/* Key stats in the dark box */}
            <Grid container spacing={3} sx={{ mt: 4, position: 'relative', zIndex: 1 }}>
              {[
                { value: '1,650', label: language === 'th' ? 'ไร่' : language === 'zh' ? '莱' : 'Rai' },
                { value: '264', label: language === 'th' ? 'เฮกตาร์' : language === 'zh' ? '公顷' : 'Hectares' },
                { value: '20+', label: language === 'th' ? 'ประเทศ' : language === 'zh' ? '国家' : 'Countries' },
                { value: '3.6M', label: language === 'th' ? 'ผู้เข้าชม' : language === 'zh' ? '游客' : 'Visitors' },
              ].map((stat, i) => (
                <Grid item xs={6} sm={3} key={i}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h3"
                      sx={{ color: '#D4AF37', fontWeight: 700, fontSize: { xs: '1.75rem', md: '2.5rem' } }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;

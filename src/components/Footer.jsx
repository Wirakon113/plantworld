import React from 'react';
import { Box, Container, Typography, Grid, Stack, IconButton, Divider } from '@mui/material';
import { useLanguage } from '../hooks/useLanguage';
import translations from '../data/translations';
import { Facebook, Twitter, Instagram, YouTube, ArrowUpward } from '@mui/icons-material';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const socialLinks = [
    { icon: <Facebook />, href: '#', label: 'Facebook' },
    { icon: <Twitter />, href: '#', label: 'Twitter' },
    { icon: <Instagram />, href: '#', label: 'Instagram' },
    { icon: <YouTube />, href: '#', label: 'YouTube' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0A2A14',
        color: '#FFFFFF',
        position: 'relative',
      }}
    >
      {/* Top decorative gradient */}
      <Box
        sx={{
          height: 4,
          background: 'linear-gradient(90deg, #2E7D32, #4CAF50, #81C784, #D4AF37, #81C784, #4CAF50, #2E7D32)',
          backgroundSize: '200% 100%',
          animation: 'gradientShift 4s linear infinite',
          '@keyframes gradientShift': {
            '0%': { backgroundPosition: '0% 50%' },
            '100%': { backgroundPosition: '200% 50%' },
          },
        }}
      />

      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={6}>
          {/* Logo & Description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 1.5,
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1.3rem',
                }}
              >
                E
              </Box>
              <Box>
                <Box sx={{ fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.2 }}>
                  UDON THANI EXPO
                </Box>
                <Box sx={{ fontWeight: 400, fontSize: '0.7rem', color: '#81C784', letterSpacing: '0.1em' }}>
                  2026
                </Box>
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, mb: 3, maxWidth: 320 }}
            >
              {language === 'th'
                ? 'มหกรรมพืชสวนโลกนานาชาติ อุดรธานี 2569 งานระดับโลกที่เชื่อมโยงคน น้ำ และพืชพรรณ เพื่อการดำรงชีวิตที่ยั่งยืน'
                : language === 'zh'
                ? '乌隆他尼国际园艺博览会2026，连接人类、水源与植物的全球盛会，共筑可持续未来'
                : 'Udon Thani International Horticultural Expo 2026 — a world-class event connecting people, water, and plants for sustainable living.'}
            </Typography>

            {/* Social Icons */}
            <Stack direction="row" spacing={1}>
              {socialLinks.map((social, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.6)',
                    '&:hover': {
                      backgroundColor: 'rgba(46,125,50,0.3)',
                      color: '#FFFFFF',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle2"
              sx={{
                color: '#81C784',
                fontWeight: 600,
                mb: 2.5,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontSize: '0.8rem',
              }}
            >
              {t.quickLinks}
            </Typography>
            <Stack spacing={1.5}>
              {[
                { label: t.aboutLink, target: 'about' },
                { label: t.ticketLink, target: 'events' },
                { label: t.guideLink, target: 'guide' },
                { label: t.contactLink, target: 'contact' },
              ].map((link, i) => (
                <Typography
                  key={i}
                  onClick={() => scrollTo(link.target)}
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    '&:hover': { color: '#81C784' },
                    transition: 'color 0.2s ease',
                    display: 'inline-block',
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Follow Us */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle2"
              sx={{
                color: '#81C784',
                fontWeight: 600,
                mb: 2.5,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontSize: '0.8rem',
              }}
            >
              {t.followUs}
            </Typography>
            <Stack spacing={1.5}>
              {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((name, i) => (
                <Typography
                  key={i}
                  component="a"
                  href="#"
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    '&:hover': { color: '#81C784' },
                    transition: 'color 0.2s ease',
                  }}
                >
                  {name}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Organizer Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle2"
              sx={{
                color: '#81C784',
                fontWeight: 600,
                mb: 2.5,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontSize: '0.8rem',
              }}
            >
              {language === 'th' ? 'ผู้จัดงาน' : language === 'zh' ? '主办方' : 'Organizer'}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, mb: 2 }}
            >
              {t.organizer}
            </Typography>
            <Box
              sx={{
                p: 2.5,
                borderRadius: 2,
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}
              >
                {language === 'th'
                  ? 'ได้รับการรับรองจากสมาคมผู้ผลิตพืชสวนนานาชาติ (AIPH)'
                  : language === 'zh'
                  ? '获得国际园艺生产者协会（AIPH）批准'
                  : 'Approved by the International Association of Horticultural Producers (AIPH)'}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.08)' }} />

        {/* Bottom bar */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
            {t.copyright}
          </Typography>
          <IconButton
            onClick={scrollToTop}
            aria-label="Scroll to top"
            sx={{
              width: 44,
              height: 44,
              backgroundColor: 'rgba(46,125,50,0.2)',
              color: '#81C784',
              '&:hover': {
                backgroundColor: 'rgba(46,125,50,0.4)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ArrowUpward />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

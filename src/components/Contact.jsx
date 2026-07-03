import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, TextField, Button, Snackbar, Alert, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import translations from '../data/translations';
import {
  Email, Phone, LocationOn, Send, Facebook, Twitter, Instagram, YouTube,
} from '@mui/icons-material';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSnackbar({
      open: true,
      message: language === 'th'
        ? 'ขอบคุณ! ข้อความของคุณถูกส่งแล้ว'
        : language === 'zh'
        ? '感谢您！您的留言已发送'
        : 'Thank you! Your message has been sent.',
    });
  };

  const contactInfo = [
    { icon: <Email />, title: t.email, value: t.emailValue, href: 'mailto:info@udonthaniexpo2026.com' },
    { icon: <Phone />, title: t.phone, value: t.phoneValue, href: 'tel:+6642123456' },
    { icon: <LocationOn />, title: t.address, value: t.addressValue },
  ];

  const socialLinks = [
    { icon: <Facebook />, href: '#', label: 'Facebook' },
    { icon: <Twitter />, href: '#', label: 'Twitter' },
    { icon: <Instagram />, href: '#', label: 'Instagram' },
    { icon: <YouTube />, href: '#', label: 'YouTube' },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#FFFFFF',
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
              {language === 'th' ? 'ติดต่อ' : language === 'zh' ? '联系我们' : 'Contact'}
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 700, color: '#10351E', mb: 2 }}>
              {t.title}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 500, mx: 'auto', color: 'text.secondary' }}>
              {t.subtitle}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {/* Left - Contact Info */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      border: '1px solid rgba(46,125,50,0.08)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2.5,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'rgba(46,125,50,0.2)',
                        boxShadow: '0 4px 20px rgba(46,125,50,0.08)',
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
                        backgroundColor: 'rgba(46,125,50,0.08)',
                        color: 'primary.main',
                        flexShrink: 0,
                      }}
                    >
                      {React.cloneElement(info.icon, { sx: { fontSize: 24 } })}
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 0.5, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {info.title}
                      </Typography>
                      {info.href ? (
                        <Typography
                          component="a"
                          href={info.href}
                          variant="body1"
                          sx={{
                            color: '#10351E',
                            fontWeight: 500,
                            textDecoration: 'none',
                            whiteSpace: 'pre-line',
                            '&:hover': { color: 'primary.main' },
                          }}
                        >
                          {info.value}
                        </Typography>
                      ) : (
                        <Typography variant="body1" sx={{ color: '#10351E', fontWeight: 500, whiteSpace: 'pre-line' }}>
                          {info.value}
                        </Typography>
                      )}
                    </Box>
                  </Paper>
                </motion.div>
              ))}

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.8rem' }}>
                  {t.social}
                </Typography>
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
                        width: 44,
                        height: 44,
                        backgroundColor: 'rgba(46,125,50,0.08)',
                        color: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'primary.main',
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
              </motion.div>
            </Stack>
          </Grid>

          {/* Right - Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: 4,
                  border: '1px solid rgba(46,125,50,0.08)',
                  background: 'linear-gradient(135deg, #FAFFFA 0%, #FFFFFF 100%)',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 600, color: '#10351E', mb: 4 }}>
                  {language === 'th' ? 'ส่งข้อความถึงเรา' : language === 'zh' ? '给我们留言' : 'Send us a Message'}
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label={t.formName}
                      variant="outlined"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          backgroundColor: '#FFFFFF',
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label={t.formEmail}
                      type="email"
                      variant="outlined"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          backgroundColor: '#FFFFFF',
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t.formMessage}
                      multiline
                      rows={4}
                      variant="outlined"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          backgroundColor: '#FFFFFF',
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<Send />}
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                      }}
                    >
                      {t.formSubmit}
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity="success"
          sx={{ borderRadius: 2, width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;

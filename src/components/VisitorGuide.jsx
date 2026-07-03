import React, { useState } from 'react';
import { Box, Container, Typography, Tabs, Tab, Paper, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import translations from '../data/translations';
import {
  Flight, LocalParking, Hotel, Restaurant, LocalHospital, Map,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

const GuideSection = ({ items, icon }) => (
  <List disablePadding>
    {items.map((item, i) => (
      <ListItem key={i} sx={{ px: 0, py: 1 }}>
        <ListItemIcon sx={{ minWidth: 36 }}>
          <CheckCircleIcon sx={{ color: '#4CAF50', fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText
          primary={item}
          primaryTypographyProps={{
            variant: 'body1',
            sx: { color: 'text.secondary', lineHeight: 1.6 },
          }}
        />
      </ListItem>
    ))}
  </List>
);

const VisitorGuide = () => {
  const { language } = useLanguage();
  const t = translations[language].guide;
  const [tabIndex, setTabIndex] = useState(0);

  const tabs = [
    { label: t.travel.title, icon: <Flight />, key: 'travel' },
    { label: t.parking.title, icon: <LocalParking />, key: 'parking' },
    { label: t.hotels.title, icon: <Hotel />, key: 'hotels' },
    { label: t.restaurants.title, icon: <Restaurant />, key: 'restaurants' },
    { label: t.emergency.title, icon: <LocalHospital />, key: 'emergency' },
    { label: t.map.title, icon: <Map />, key: 'map' },
  ];

  const dataMap = {
    travel: t.travel.items,
    parking: t.parking.items,
    hotels: t.hotels.items,
    restaurants: t.restaurants.items,
    emergency: t.emergency.items,
    map: null,
  };

  return (
    <Box
      id="guide"
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
              {language === 'th' ? 'คู่มือ' : language === 'zh' ? '游客指南' : 'Visitor Guide'}
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 700, color: '#10351E', mb: 2 }}>
              {t.title}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 500, mx: 'auto', color: 'text.secondary' }}>
              {t.subtitle}
            </Typography>
          </Box>
        </motion.div>

        {/* Tabs */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            border: '1px solid rgba(0,0,0,0.06)',
            overflow: 'hidden',
          }}
        >
          <Tabs
            value={tabIndex}
            onChange={(_, v) => setTabIndex(v)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              px: 2,
              pt: 2,
              backgroundColor: '#FAFFFA',
              '& .MuiTab-root': {
                minHeight: 48,
                borderRadius: 2,
                mx: 0.5,
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '0.85rem',
                '&.Mui-selected': {
                  backgroundColor: 'rgba(46, 125, 50, 0.08)',
                  color: 'primary.main',
                },
              },
              '& .MuiTabs-indicator': {
                display: 'none',
              },
            }}
          >
            {tabs.map((tab, i) => (
              <Tab
                key={tab.key}
                icon={React.cloneElement(tab.icon, { sx: { fontSize: 20 } })}
                iconPosition="start"
                label={tab.label}
              />
            ))}
          </Tabs>

          <Box sx={{ p: { xs: 3, md: 5 } }}>
            <motion.div
              key={tabIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {tabs[tabIndex].key === 'map' ? (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <Map sx={{ fontSize: 64, color: 'primary.main', mb: 2, opacity: 0.5 }} />
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {t.map.text}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.disabled', mt: 1 }}>
                    {language === 'th'
                      ? 'แผนที่แบบโต้ตอบกำลังจะมาเร็วๆ นี้'
                      : language === 'zh'
                      ? '交互式地图即将推出'
                      : 'Interactive map coming soon'}
                  </Typography>
                </Box>
              ) : (
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8}>
                    <GuideSection items={dataMap[tabs[tabIndex].key]} />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #F5FFF6 0%, #FFFFFF 100%)',
                        border: '1px solid rgba(46,125,50,0.1)',
                        height: '100%',
                      }}
                    >
                      <Typography variant="h6" sx={{ color: '#10351E', fontWeight: 600, mb: 1 }}>
                        {language === 'th' ? 'เคล็ดลับ' : language === 'zh' ? '小贴士' : 'Pro Tip'}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                        {language === 'th'
                          ? 'แนะนำให้ดาวน์โหลดแอปพลิเคชันอย่างเป็นทางการก่อนเดินทาง เพื่อรับข้อมูลอัปเดต แผนที่แบบเรียลไทม์ และโปรโมชั่นพิเศษ'
                          : language === 'zh'
                          ? '建议在出行前下载官方应用程序，获取实时更新、地图和特别优惠信息'
                          : 'Download the official app before your visit for real-time updates, interactive maps, and exclusive promotions.'}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              )}
            </motion.div>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default VisitorGuide;

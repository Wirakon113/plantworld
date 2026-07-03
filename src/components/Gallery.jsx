import React, { useState } from 'react';
import { Box, Container, Typography, ImageList, ImageListItem, Dialog, DialogContent, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import translations from '../data/translations';
import { Close, ZoomIn } from '@mui/icons-material';

const galleryImages = [
  {
    img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80',
    title: 'Garden Landscape',
    cols: 2,
    rows: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    title: 'Flower Garden',
    cols: 1,
    rows: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&q=80',
    title: 'Colorful Flowers',
    cols: 1,
    rows: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&q=80',
    title: 'Garden Path',
    cols: 1,
    rows: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=600&q=80',
    title: 'Green Garden',
    cols: 1,
    rows: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1470058869961-0c1e3d881399?w=600&q=80',
    title: 'Tropical Plants',
    cols: 2,
    rows: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1578302758063-2ef3b2f0eccc?w=600&q=80',
    title: 'Expo Architecture',
    cols: 1,
    rows: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1490077476659-095159692ab5?w=600&q=80',
    title: 'Night Garden',
    cols: 1,
    rows: 1,
  },
];

const Gallery = () => {
  const { language } = useLanguage();
  const t = translations[language].gallery;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Box
      id="gallery"
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
              {language === 'th' ? 'แกลเลอรี่' : language === 'zh' ? '画廊' : 'Gallery'}
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 700, color: '#10351E', mb: 2 }}>
              {t.title}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 500, mx: 'auto', color: 'text.secondary' }}>
              {t.subtitle}
            </Typography>
          </Box>
        </motion.div>

        {/* Image Grid */}
        <ImageList
          variant="quilted"
          cols={4}
          gap={12}
          sx={{
            overflow: 'visible',
            m: 0,
          }}
        >
          {galleryImages.map((item, index) => (
            <ImageListItem
              key={index}
              cols={item.cols || 1}
              rows={item.rows || 1}
              component={motion.li}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Box
                onClick={() => setSelectedImage(item.img)}
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  group: true,
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 12,
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => { e.target.style.transform = 'scale(1.08)'; }}
                  onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
                />
                {/* Hover overlay */}
                <Box
                  className="gallery-overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(16,53,30,0.8) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'flex-end',
                    p: 2,
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#FFFFFF' }}>
                    <ZoomIn sx={{ fontSize: 18 }} />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

      {/* Lightbox Dialog */}
      <Dialog
        open={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        maxWidth="xl"
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            overflow: 'visible',
          },
        }}
      >
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <IconButton
                onClick={() => setSelectedImage(null)}
                sx={{
                  position: 'absolute',
                  top: -40,
                  right: 0,
                  color: '#FFFFFF',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
                }}
                aria-label="Close lightbox"
              >
                <Close />
              </IconButton>
              <img
                src={selectedImage.replace('w=600', 'w=1200')}
                alt="Gallery"
                style={{
                  maxHeight: '85vh',
                  maxWidth: '90vw',
                  borderRadius: 16,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Dialog>
    </Box>
  );
};

export default Gallery;

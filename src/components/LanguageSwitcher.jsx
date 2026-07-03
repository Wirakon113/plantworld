import { useLanguage } from '../hooks/useLanguage';
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import { Language as LanguageIcon } from '@mui/icons-material';
import { useState } from 'react';

const languages = [
  { code: 'th', label: 'ไทย', flag: '🇹🇭' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelect = (code) => {
    setLanguage(code);
    handleClose();
  };

  const current = languages.find((l) => l.code === language);

  return (
    <Box>
      <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        aria-label="Select language"
        sx={{
          px: 1.5,
          py: 0.5,
          borderRadius: 2,
          backgroundColor: 'rgba(46, 125, 50, 0.08)',
          '&:hover': {
            backgroundColor: 'rgba(46, 125, 50, 0.15)',
          },
        }}
      >
        <LanguageIcon sx={{ fontSize: 20, color: 'primary.main', mr: 0.5 }} />
        <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main', fontSize: '0.85rem' }}>
          {current?.flag} {current?.label}
        </Typography>
      </IconButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: 3,
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            minWidth: 160,
          },
        }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            selected={language === lang.code}
            sx={{
              borderRadius: 1.5,
              mx: 0.5,
              my: 0.25,
              '&.Mui-selected': {
                backgroundColor: 'rgba(46, 125, 50, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <Typography variant="body1">{lang.flag}</Typography>
            </ListItemIcon>
            <ListItemText primary={lang.label} />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageSwitcher;

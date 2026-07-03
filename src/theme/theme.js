import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#2E7D32',
      light: '#4CAF50',
      dark: '#1B5E20',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: '#81C784',
      light: '#A5D6A7',
      dark: '#66BB6A',
    },
    gold: {
      main: '#D4AF37',
      light: '#E0C55B',
      dark: '#B8962F',
    },
    background: {
      default: '#F5FFF6',
      paper: '#FFFFFF',
    },
    dark: {
      main: '#10351E',
      light: '#1B5E20',
      dark: '#0A2A14',
    },
    text: {
      primary: '#263238',
      secondary: '#546E7A',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'Prompt',
      '"Noto Sans SC"',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Poppins, Prompt, "Noto Sans SC", sans-serif',
      fontWeight: 700,
      fontSize: '4rem',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: 'Poppins, Prompt, "Noto Sans SC", sans-serif',
      fontWeight: 600,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: 'Poppins, Prompt, "Noto Sans SC", sans-serif',
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: 'Poppins, Prompt, "Noto Sans SC", sans-serif',
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.3,
    },
    h5: {
      fontFamily: 'Poppins, Prompt, "Noto Sans SC", sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: 'Poppins, Prompt, "Noto Sans SC", sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.0625rem',
      lineHeight: 1.7,
      color: '#546E7A',
    },
    body2: {
      fontSize: '0.9375rem',
      lineHeight: 1.6,
      color: '#78909C',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 16,
  },
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        '&::selection': {
          backgroundColor: '#4CAF50',
          color: '#FFFFFF',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '12px 32px',
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(46, 125, 50, 0.35)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
          boxShadow: '0 4px 15px rgba(46, 125, 50, 0.3)',
        },
        outlinedPrimary: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '16px !important',
          marginBottom: '12px',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: '0 0 12px 0',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          padding: '8px 24px',
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0 24px 24px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiTimeline: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

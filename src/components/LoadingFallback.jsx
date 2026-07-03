import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingFallback = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 8,
        minHeight: 200,
      }}
    >
      <CircularProgress size={40} />
    </Box>
  );
};

export default LoadingFallback;

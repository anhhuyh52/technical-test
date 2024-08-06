"use client";

import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import UpdateButton from '../components/UpdateButton';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Home Page
        </Typography>
        <UpdateButton />
      </Box>
    </Container>
  );
};

export default HomePage;

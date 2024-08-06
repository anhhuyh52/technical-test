'use client';

import React from 'react';
import { Button, CircularProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { updateData } from '@/redux/slices/apiSlice';

const UpdateButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, success, error } = useSelector((state: RootState) => state.api);

  const handleClick = () => {
    dispatch(updateData());
  };

  return (
    <>
      <Button onClick={handleClick} disabled={loading} variant="contained">
        {loading ? <CircularProgress size={24} /> : 'Update Data'}
      </Button>
      {success && <Typography color="success.main">Update successful!</Typography>}
      {error && <Typography color="error.main">{error}</Typography>}
    </>
  );
};

export default UpdateButton;

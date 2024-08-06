import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ApiState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: ApiState = {
  loading: false,
  success: false,
  error: null,
};

export const updateData = createAsyncThunk(
  'api/updateData',
  async (_, { getState, rejectWithValue }) => {
    const state: any = getState();
    const token = state.auth.user?.token;

    if (!token) {
      return rejectWithValue('Unauthorized');
    }

    try {
      const response = await axios.post('/api/update-user-data', {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateData.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(updateData.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateData.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export default apiSlice.reducer;

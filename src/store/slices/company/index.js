import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: null,
  loading: 'idle',
  error: null,
};

const company = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setIsPending: (state) => {
      state.loading = 'pending';
    },
    setCompanyContent: (state, { payload }) => {
      state.loading = 'success';
      state.content = payload;
    },
    setError: (state, { payload }) => {
      state.loading = 'error';
      state.error = payload;
    },
  },
});

export const actions = company.actions;

export default company.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: null,
  loading: 'idle',
  error: null,
};

const quote = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    setIsPending: (state) => {
      state.loading = 'pending';
    },
    setQuoteContent: (state, { payload }) => {
      state.loading = 'success';
      state.content = payload;
    },
    setError: (state, { payload }) => {
      state.loading = 'error';
      state.error = payload;
    },
  },
});

export const actions = quote.actions;

export default quote.reducer;

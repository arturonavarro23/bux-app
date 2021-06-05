import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: null,
  status: 'idle',
  error: null,
};

const quote = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    setIsPending: (state) => {
      state.status = 'pending';
    },
    setQuoteContent: (state, { payload }) => {
      state.status = 'success';
      state.content = payload;
    },
    setError: (state, { payload }) => {
      state.status = 'error';
      state.error = payload;
    },
  },
});

export const actions = quote.actions;

export default quote.reducer;

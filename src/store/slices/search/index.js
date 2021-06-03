import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  results: [],
  loading: 'idle',
};

const search = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setIsPending: (state) => {
      state.loading = 'pending';
    },
    setError: (state) => {
      state.loading = 'idle';
    },
  },
});

export const actions = search.actions;

export default search.reducer;

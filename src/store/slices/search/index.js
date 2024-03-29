import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  results: [],
  status: 'idle',
};

const search = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setIsPending: (state) => {
      state.status = 'pending';
    },
    setResults: (state, actions) => {
      state.status = 'success';
      state.results = actions.payload;
    },
    setError: (state) => {
      state.status = 'error';
      state.results = [];
    },
  },
});

export const actions = search.actions;
export const reducer = search.reducer;

export default search.reducer;

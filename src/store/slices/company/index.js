import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  content: null,
  status: 'idle',
  error: null,
};

const company = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setIsPending: (state) => {
      state.status = 'pending';
    },
    setCompanyContent: (state, { payload }) => {
      state.status = 'success';
      state.content = payload;
    },
    setError: (state, { payload }) => {
      state.status = 'error';
      state.error = payload;
    },
  },
});

export const actions = company.actions;
export const reducer = company.reducer;

export default company.reducer;

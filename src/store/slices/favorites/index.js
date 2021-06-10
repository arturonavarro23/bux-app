import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  items: [],
  modalIsOpen: false,
};

const favorites = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.items = action.payload;
    },
    openModal(state) {
      state.modalIsOpen = true;
    },
    closeModal(state) {
      state.modalIsOpen = false;
    },
  },
});

export const actions = favorites.actions;
export const reducer = favorites.reducer;

export default favorites.reducer;

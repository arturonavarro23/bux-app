import { actions } from '../../slices/favorites';

const { setFavorites, openModal, closeModal } = actions;

export const toogleFavorite = (company) => async (dispatch, state) => {
  const favorites = state().favorites;
  let newFavorites;
  if (favorites.items.some((f) => f.symbol === company.symbol)) {
    newFavorites = favorites.items.filter((f) => f.symbol !== company.symbol);
  } else {
    newFavorites = favorites.items.concat([
      {
        symbol: company.symbol,
        companyName: company.companyName,
      },
    ]);
  }

  dispatch(setFavorites(newFavorites));
  localStorage.setItem('favorites', JSON.stringify(newFavorites));
};

export { openModal };
export { closeModal };

export default {
  toogleFavorite,
  openModal,
  closeModal,
};

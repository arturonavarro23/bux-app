import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { toogleFavorite } from '.';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  favorites: { items: [], modalIsOpen: false },
};

describe('favorites action creator', () => {
  it('creates favorites/setFavorites to add a new item', async () => {
    const favorite = { symbol: 'BUX', companyName: 'Bux' };
    const expectedActions = [
      {
        payload: [favorite],
        type: 'favorites/setFavorites',
      },
    ];

    const store = mockStore(initialState);

    await store.dispatch(toogleFavorite(favorite));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates favorites/setFavorites to remove a new item', async () => {
    const favorite = { symbol: 'BUX', companyName: 'Bux' };
    const expectedActions = [
      {
        payload: [],
        type: 'favorites/setFavorites',
      },
    ];

    const store = mockStore({
      favorites: { items: [favorite], modalIsOpen: false },
    });

    await store.dispatch(toogleFavorite(favorite));

    expect(store.getActions()).toEqual(expectedActions);
  });
});

import { actions, reducer, initialState } from '.';

describe('actions', () => {
  it('should create an action open the favorites modal', () => {
    const expectedAction = {
      payload: undefined,
      type: 'favorites/openModal',
    };

    expect(actions.openModal()).toEqual(expectedAction);
  });

  it('should create an action to close the favorites modal', () => {
    const expectedAction = {
      payload: undefined,
      type: 'favorites/closeModal',
    };

    expect(actions.closeModal()).toEqual(expectedAction);
  });

  it('should create an action to set new favorites', () => {
    const favorites = [{ symbol: 'BUX', companyName: 'BUX' }];
    const expectedAction = {
      payload: favorites,
      type: 'favorites/setFavorites',
    };

    expect(actions.setFavorites(favorites)).toEqual(expectedAction);
  });
});

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle favorites/openModal', () => {
    expect(
      reducer(initialState, {
        payload: undefined,
        type: 'favorites/openModal',
      }),
    ).toEqual({
      items: [],
      modalIsOpen: true,
    });
  });

  it('should handle company/closeModal', () => {
    const company = { id: 1, comanyName: 'Bux' };
    expect(
      reducer(
        { ...initialState, modalIsOpen: true },
        {
          payload: company,
          type: 'favorites/closeModal',
        },
      ),
    ).toEqual({
      items: [],
      modalIsOpen: false,
    });
  });

  it('should handle company/setError', () => {
    const favorites = [{ symbol: 'BUX', companyName: 'BUX' }];
    expect(
      reducer(initialState, {
        payload: favorites,
        type: 'favorites/setFavorites',
      }),
    ).toEqual({
      items: favorites,
      modalIsOpen: false,
    });
  });
});

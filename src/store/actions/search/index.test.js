import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import api from 'api';
import { search } from '.';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  search: { results: [], status: 'idle' },
};

describe('search action creator', () => {
  it('creates search/setResults when fetching results has been done', async () => {
    const results = [{ symbol: 'BUX', name: 'BUX' }];
    const expectedActions = [
      {
        payload: undefined,
        type: 'search/setIsPending',
      },
      {
        payload: results,
        type: 'search/setResults',
      },
    ];
    jest.spyOn(api, 'get').mockResolvedValue({ data: results });

    const store = mockStore(initialState);

    await store.dispatch(search('BUX'));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates search/setError when fetching fail', async () => {
    const expectedActions = [
      {
        payload: undefined,
        type: 'search/setIsPending',
      },
      {
        payload: undefined,
        type: 'search/setError',
      },
    ];
    jest.spyOn(api, 'get').mockRejectedValue(new Error('error'));

    const store = mockStore(initialState);

    await store.dispatch(search('BUX'));

    expect(store.getActions()).toEqual(expectedActions);
  });
});

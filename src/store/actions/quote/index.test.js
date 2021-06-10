import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import api from 'api';
import { getQuote } from '.';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  quote: { content: null, status: 'idle', error: null },
};

describe('quote action creator', () => {
  it('creates quote/setQuoteContent when fetching quote has been done', async () => {
    const quote = {
      open: 25,
      close: 26,
      change: 1,
      changePercent: 0.1,
      high: 25,
      latestTime: 'june',
      low: 25,
      volume: 1000000,
    };
    const expectedActions = [
      {
        payload: undefined,
        type: 'quote/setIsPending',
      },
      {
        payload: quote,
        type: 'quote/setQuoteContent',
      },
    ];
    jest.spyOn(api, 'get').mockResolvedValue({ data: quote });

    const store = mockStore(initialState);

    await store.dispatch(getQuote('BUX'));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates quote/setError when fetching fail', async () => {
    const error = new Error('error state');
    const expectedActions = [
      {
        payload: undefined,
        type: 'quote/setIsPending',
      },
      {
        payload: error,
        type: 'quote/setError',
      },
    ];
    jest.spyOn(api, 'get').mockRejectedValue(error);

    const store = mockStore(initialState);

    await store.dispatch(getQuote('BUX'));

    expect(store.getActions()).toEqual(expectedActions);
  });
});

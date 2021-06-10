import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import api from 'api';
import { getCompany } from '.';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  company: { content: null, status: 'idle', error: null },
};

describe('company action creator', () => {
  it('creates company/setCompanyContent when fetching company has been done', async () => {
    const company = { id: 1, comanyName: 'Bux' };
    const expectedActions = [
      {
        payload: undefined,
        type: 'company/setIsPending',
      },
      {
        payload: company,
        type: 'company/setCompanyContent',
      },
    ];
    jest.spyOn(api, 'get').mockResolvedValue({ data: company });

    const store = mockStore(initialState);

    await store.dispatch(getCompany('BUX'));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates company/setError when fetching fail', async () => {
    const error = new Error('error state');
    const expectedActions = [
      {
        payload: undefined,
        type: 'company/setIsPending',
      },
      {
        payload: error,
        type: 'company/setError',
      },
    ];
    jest.spyOn(api, 'get').mockRejectedValue(error);

    const store = mockStore(initialState);

    await store.dispatch(getCompany('BUX'));

    expect(store.getActions()).toEqual(expectedActions);
  });
});

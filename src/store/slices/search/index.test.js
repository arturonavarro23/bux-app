import { actions, reducer, initialState } from '.';

describe('actions', () => {
  it('should create an action to add a pending state', () => {
    const expectedAction = {
      payload: undefined,
      type: 'search/setIsPending',
    };

    expect(actions.setIsPending()).toEqual(expectedAction);
  });

  it('should create an action to set the results', () => {
    const results = [{ symbol: 'BUX', name: 'BUX' }];
    const expectedAction = {
      payload: results,
      type: 'search/setResults',
    };

    expect(actions.setResults(results)).toEqual(expectedAction);
  });

  it('should create an action to set an error state', () => {
    const expectedAction = {
      payload: undefined,
      type: 'search/setError',
    };

    expect(actions.setError()).toEqual(expectedAction);
  });
});

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle search/setIsPending', () => {
    expect(
      reducer(initialState, {
        payload: undefined,
        type: 'search/setIsPending',
      }),
    ).toEqual({
      results: [],
      status: 'pending',
    });
  });

  it('should handle search/setQuoteContent', () => {
    const results = [{ symbol: 'BUX', name: 'BUX' }];
    expect(
      reducer(initialState, {
        payload: results,
        type: 'search/setResults',
      }),
    ).toEqual({
      results,
      status: 'success',
    });
  });

  it('should handle search/setError', () => {
    expect(
      reducer(initialState, {
        payload: undefined,
        type: 'search/setError',
      }),
    ).toEqual({
      results: [],
      status: 'error',
    });
  });
});

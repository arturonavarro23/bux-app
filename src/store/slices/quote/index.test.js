import { actions, reducer, initialState } from '.';

describe('actions', () => {
  it('should create an action to add a pending state', () => {
    const expectedAction = {
      payload: undefined,
      type: 'quote/setIsPending',
    };

    expect(actions.setIsPending()).toEqual(expectedAction);
  });

  it('should create an action to set the quote content', () => {
    const quote = { open: 25, close: 26 };
    const expectedAction = {
      payload: quote,
      type: 'quote/setQuoteContent',
    };

    expect(actions.setQuoteContent(quote)).toEqual(expectedAction);
  });

  it('should create an action to set an error state', () => {
    const error = new Error('error state');
    const expectedAction = {
      payload: error,
      type: 'quote/setError',
    };

    expect(actions.setError(error)).toEqual(expectedAction);
  });
});

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle quote/setIsPending', () => {
    expect(
      reducer(initialState, {
        payload: undefined,
        type: 'quote/setIsPending',
      }),
    ).toEqual({
      content: null,
      status: 'pending',
      error: null,
    });
  });

  it('should handle quote/setQuoteContent', () => {
    const quote = { open: 25, close: 26 };
    expect(
      reducer(initialState, {
        payload: quote,
        type: 'quote/setQuoteContent',
      }),
    ).toEqual({
      content: quote,
      status: 'success',
      error: null,
    });
  });

  it('should handle quote/setError', () => {
    const error = new Error('error state');
    expect(
      reducer(initialState, {
        payload: error,
        type: 'quote/setError',
      }),
    ).toEqual({
      content: null,
      status: 'error',
      error: error,
    });
  });
});

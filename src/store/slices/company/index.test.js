import { actions, reducer, initialState } from '.';

describe('actions', () => {
  it('should create an action to add a pending state', () => {
    const expectedAction = {
      payload: undefined,
      type: 'company/setIsPending',
    };

    expect(actions.setIsPending()).toEqual(expectedAction);
  });

  it('should create an action to set the company content', () => {
    const company = { id: 1, comanyName: 'Bux' };
    const expectedAction = {
      payload: company,
      type: 'company/setCompanyContent',
    };

    expect(actions.setCompanyContent(company)).toEqual(expectedAction);
  });

  it('should create an action to set an error state', () => {
    const error = new Error('error state');
    const expectedAction = {
      payload: error,
      type: 'company/setError',
    };

    expect(actions.setError(error)).toEqual(expectedAction);
  });
});

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle company/setIsPending', () => {
    expect(
      reducer(initialState, {
        payload: undefined,
        type: 'company/setIsPending',
      }),
    ).toEqual({
      content: null,
      status: 'pending',
      error: null,
    });
  });

  it('should handle company/setCompanyContent', () => {
    const company = { id: 1, comanyName: 'Bux' };
    expect(
      reducer(initialState, {
        payload: company,
        type: 'company/setCompanyContent',
      }),
    ).toEqual({
      content: company,
      status: 'success',
      error: null,
    });
  });

  it('should handle company/setError', () => {
    const error = new Error('error state');
    expect(
      reducer(initialState, {
        payload: error,
        type: 'company/setError',
      }),
    ).toEqual({
      content: null,
      status: 'error',
      error: error,
    });
  });
});

import { changeStatus } from 'constants/enums';
import quoteMock from 'mocks/quote';
import { backendQuoteToFrontend, getChangeStatus } from '.';

describe('quoteUtils', () => {
  it('should retrive an INCREMENT status', () => {
    const result = getChangeStatus(1);
    expect(result).toBe(changeStatus.INCREMENT);
  });

  it('should retrive a DECREASE status', () => {
    const result = getChangeStatus(-1);
    expect(result).toBe(changeStatus.DECREASE);
  });

  it('should retrive a NO_CHANGE status', () => {
    const result = getChangeStatus(0);
    expect(result).toBe(changeStatus.NO_CHANGE);
  });

  it('Should transform the api response', () => {
    const expectedResult = {
      latestTime: 'June 4, 2021',
      change: 2.35,
      close: 125.89,
      changePercent: 0.01902,
      open: 124.01,
      volume: 75169343,
      high: 126.16,
      low: 123.85,
    };

    const result = backendQuoteToFrontend(quoteMock);

    expect(result).toEqual(expectedResult);
  });

  it('Should transform the api response using the fallback data', () => {
    const expectedResult = {
      latestTime: 'June 4, 2021',
      change: 2.35,
      close: 125.87,
      changePercent: 0.01902,
      open: 125.89,
      volume: 75169343,
      high: 126.16,
      low: 123.85,
    };

    const overrideData = {
      close: null,
      open: null,
    };

    const result = backendQuoteToFrontend({ ...quoteMock, ...overrideData });

    expect(result).toEqual(expectedResult);
  });
});

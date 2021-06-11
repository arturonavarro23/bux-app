import { selectCompanyInfo } from '.';

const state = {
  company: {
    content: { symbol: 'BUX', companyName: 'Bux' },
  },
  quote: {
    content: { open: 23, close: 22 },
  },
  favorites: { items: [] },
};

describe('selectors', () => {
  it('should retrieve a non favorite company info', () => {
    const companyInfo = selectCompanyInfo(state);

    expect(companyInfo).toEqual({
      company: state.company,
      quote: state.quote,
      isFavorite: false,
    });
  });

  it('should retrieve a favorite company info', () => {
    const companyInfo = selectCompanyInfo({
      ...state,
      favorites: { items: [state.company.content] },
    });

    expect(companyInfo).toEqual({
      company: state.company,
      quote: state.quote,
      isFavorite: true,
    });
  });
});

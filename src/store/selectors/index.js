export function selectCompanyInfo(state) {
  return {
    company: state.company,
    quote: state.quote,
    isFavorite: state.favorites.items.some(
      (f) => f.symbol === state.company.content?.symbol,
    ),
  };
}

import api from 'api';
import { backendQuoteToFrontend } from 'utils/quoteUtils';
import { actions } from '../../slices/quote';

export const getQuote = (symbol) => async (dispatch) => {
  dispatch(actions.setIsPending());
  try {
    const { data } = await api.get(`/stock/${symbol}/quote`);
    dispatch(actions.setQuoteContent(backendQuoteToFrontend(data)));
  } catch (e) {
    dispatch(actions.setError(e));
  }
};

export default {
  getQuote,
};

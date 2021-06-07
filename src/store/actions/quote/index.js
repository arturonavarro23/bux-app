import api from 'api';
// import quote from 'mocks/quote';
import { actions } from '../../slices/quote';

export const getQuote = (symbol) => async (dispatch) => {
  dispatch(actions.setIsPending());
  try {
    const { data } = await api.get(`/stock/${symbol}/quote`);
    // const { data } = await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({
    //       data: quote,
    //     });
    //   }, 2000);
    // });
    dispatch(actions.setQuoteContent(data));
  } catch (e) {
    dispatch(actions.setError(e));
  }
};

export default {
  getQuote,
};

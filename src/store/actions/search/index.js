import api from 'api';
import { actions } from '../../slices/search';

export const search = (term) => async (dispatch) => {
  dispatch(actions.setIsPending());
  try {
    // Once the search endpoint is not free in the IEX API
    // as a workaround I decided to use this free API
    // that basically only serve a static list of companies
    // https://github.com/yashwanth2804/TickerSymbol
    const { data } = await api.get(`/keyword/${term}`, {
      baseURL: process.env.REACT_APP_BACKEND_SEARCH,
    });
    dispatch(actions.setResults(data));
  } catch (e) {
    dispatch(actions.setError());
  }
};

export default {
  search,
};

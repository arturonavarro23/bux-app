import api from 'api';
import { actions } from '../../slices/company';

export const getCompany = (symbol) => async (dispatch) => {
  dispatch(actions.setIsPending());
  try {
    const { data } = await api.get(`/stock/${symbol}/company`);
    dispatch(actions.setCompanyContent(data));
  } catch (e) {
    dispatch(actions.setError(e));
  }
};

export default {
  getCompany,
};

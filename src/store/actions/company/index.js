import api from 'api';
// import company from 'mocks/company';
import { actions } from '../../slices/company';

export const getCompany = (symbol) => async (dispatch) => {
  dispatch(actions.setIsPending());
  try {
    const { data } = await api.get(`/stock/${symbol}/company`);
    // const { data } = await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({
    //       data: company,
    //     });
    //   }, 2000);
    // });
    dispatch(actions.setCompanyContent(data));
  } catch (e) {
    dispatch(actions.setError(e));
  }
};

export default {
  getCompany,
};

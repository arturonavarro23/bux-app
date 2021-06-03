import { combineReducers } from 'redux';
import search from '../slices/search';
import company from '../slices/company';
import quote from '../slices/quote';

export default combineReducers({
  search,
  company,
  quote,
});

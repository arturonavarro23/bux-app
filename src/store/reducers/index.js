import { combineReducers } from 'redux';
import search from '../slices/search';
import company from '../slices/company';
import quote from '../slices/quote';
import favorites from '../slices/favorites';

export default combineReducers({
  search,
  company,
  quote,
  favorites,
});

import { combineReducers } from 'redux';
import categories from './CategoryReducers';
import products from './ProductReducers';

export default combineReducers({
  categories,
  products
});

import { combineReducers } from 'redux';
import categories from './Category/CategoryReducers';
import products from './Product/ProductReducers';

export default combineReducers({
  categories,
  products
});

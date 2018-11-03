import { combineReducers } from 'redux';
import categories from './CategoryReducers';
import products from './ProductReducers';
import cart from './CartReducers';

export default combineReducers({
  categories,
  products,
  cart
});

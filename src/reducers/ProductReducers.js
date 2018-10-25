import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from '../actions/ProductActions';

import Filter from '../services/Filter';

const initialState = {
  items: [],
  filteredItems: [],
  loading: false,
  error: null
};

const ProductReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
        filteredItems: []
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: action.payload.products,
        filteredItems: action.payload.products
      };

    default:
      return state;
  }
}

export default ProductReducers;

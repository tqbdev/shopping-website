import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FILTER_PRODUCTS
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
      break;
    
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
        filteredItems: []
      };
      break;

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: action.payload.products,
        filteredItems: action.payload.products
      };
      break;

    case FILTER_PRODUCTS: {
      const items = state.items;
      return {
        ...state,
        filteredItems: Filter.filterProductByCategory(items, action.payload.categoryId)
      }
    }
      break;

    default:
      return state;
  }
}

export default ProductReducers;

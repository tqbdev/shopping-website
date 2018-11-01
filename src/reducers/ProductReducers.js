import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_A_PRODUCT_BEGIN,
  FETCH_A_PRODUCT_SUCCESS,
  FETCH_A_PRODUCT_FAILURE
} from '../actions/ProductActions';

const initialState = {
  items: [],
  pagination: null,
  item: null,
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
        pagination: null
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: action.payload.products.body,
        pagination: action.payload.products.pagination
      };

    case FETCH_A_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case FETCH_A_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        item: null
      };

    case FETCH_A_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        item: action.payload.product
      };

    default:
      return state;
  }
}

export default ProductReducers;

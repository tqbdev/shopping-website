import {
  FETCH_CATEGORIES_BEGIN,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from '../../actions/Category/CategoryActions';

const initialState = {
  items: [],
  loading: false,
  error: null
};

const CategoryReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
      break;
    
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
      break;

    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: action.payload.categories
      };
      break;

    default:
      return state;
  }
}

export default CategoryReducers;

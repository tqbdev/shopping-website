import config from '../config';

// ACTION TYPE
export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const FETCH_A_PRODUCT_BEGIN   = 'FETCH_A_PRODUCT_BEGIN';
export const FETCH_A_PRODUCT_SUCCESS = 'FETCH_A_PRODUCT_SUCCESS';
export const FETCH_A_PRODUCT_FAILURE = 'FETCH_A_PRODUCT_FAILURE';

// FETCH
export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export function fetchProducts(filter) {
  return dispatch => {
    dispatch(fetchProductsBegin());
    let url = config.url.product;
    if (filter) {
      url += `?filter=${JSON.stringify(filter)}`
    }
    return fetch(url)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

export const fetchAProductBegin = () => ({
  type: FETCH_A_PRODUCT_BEGIN
});

export const fetchAProductSuccess = product => ({
  type: FETCH_A_PRODUCT_SUCCESS,
  payload: { product }
});

export const fetchAProductFailure = error => ({
  type: FETCH_A_PRODUCT_FAILURE,
  payload: { error }
});

export function fetchAProduct(id) {
  return dispatch => {
    dispatch(fetchAProductBegin());
    return fetch(`${config.url.product}/${id}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchAProductSuccess(json.body));
        return json.body;
      })
      .catch(error => dispatch(fetchAProductFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

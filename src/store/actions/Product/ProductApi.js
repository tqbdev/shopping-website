import * as product from './ProductActions';
import config from '../../../config';

export function fetchProducts() {
  return dispatch => {
    dispatch(product.fetchProductsBegin());
    return fetch(config.url.product)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(product.fetchProductsSuccess(json.body));
        return json.body;
      })
      .catch(error => dispatch(product.fetchProductsFailure(error)));
  };
}

export function filterProducts(categoryId) {
  if (!categoryId) return;
  return dispatch => {
    dispatch(product.filterProducts(categoryId));
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

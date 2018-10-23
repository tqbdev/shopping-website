import * as category from './CategoryActions';
import config from '../../../config';

export function fetchCategories() {
  return dispatch => {
    dispatch(category.fetchCategoriesBegin());
    return fetch(config.url.category)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(category.fetchCategoriesSuccess([{
          id: 'all',
          name: 'all'
        },
        ...json.body
        ]));
        return json.body;
      })
      .catch(error => dispatch(category.fetchCategoriesFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

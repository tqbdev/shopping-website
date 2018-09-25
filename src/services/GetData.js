import config from '../config';

export default {
  getCategories () {
    return fetch(config.url.category);
  },
  getProducts () {
    return fetch(config.url.product);
  }
}
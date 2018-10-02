import config from '../config';
import categories from './data/categories';
import products from './data/products';

export default {
  getCategories () {
    return categories;
    // return fetch(config.url.category);
  },
  getProducts () {
    return products;
    // return fetch(config.url.product);
  }
}
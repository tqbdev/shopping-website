import _ from 'lodash';

export default {
  filterProductByCategory(products, category) {
    if (category !== null) {
      if (typeof(category) === 'object') {
        return _.filter(products, {"categoryId": category.id});
      } else {
        return _.filter(products, {"categoryId": category});
      }
    }
    
    return [];
  }
}
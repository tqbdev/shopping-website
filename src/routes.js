import HomePage from './containers/HomePage/HomePage';
import CategoryPage from './containers/CategoryPage/CategoryPage';
import ProductPage from './containers/ProductPage/ProductPage';

export default [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/categories",
    component: CategoryPage
  },
  {
    path: "/product/:id",
    component: ProductPage
  }
];

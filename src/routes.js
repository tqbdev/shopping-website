import HomePage from './components/HomePage/HomePage';
import CategoryPage from './components/CategoryPage/CategoryPage';
import ProductPage from './components/ProductPage/ProductPage';

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

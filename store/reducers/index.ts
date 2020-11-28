import { combineReducers } from 'redux';
import app from './app/app';
import billing from './billing/billing';
import billingList from './billing/billingList';
import post from './blog/post';
import postsByCategory from './blog/postsByCategory';
import postsByTag from './blog/postsByTag';
import publishBlogPostCover from './blog/publishBlogPost';
import bundle from './bundle/bundle';
import bundles from './bundles/bundles';
import bundlesCategories from './bundles/bundlesCategories';
import cart from './cart/cart';
import categories from './categories/categories';
import home from './home/home';
import order from './order/order';
import orders from './orders/orders';
import paymentMethod from './paymentMethod/paymentMethod';
import product from './product/product';
import products from './products/products';
import promotion from './promotion/promotion';
import productsCategories from './products/productsCategories';
import shipping from './shipping/shipping';
import shippingList from './shipping/shippingList';
import publicProfile from './user/publicProfile';
import user from './user/user';
import loginRequestCount from './loginRequestCount/loginRequestCount';
import thankYou from './thankYou/thankYou';
import search from './search/search';
import acceptedPaymentMethods from './accepted-payment-methods/accepted-payment-methods';
import navbar from './navbar/navbar';

export default combineReducers({
  app,
  acceptedPaymentMethods,
  billing,
  billingList,
  bundle,
  bundles,
  bundlesCategories,
  cart,
  categories,
  home,
  navbar,
  order,
  orders,
  paymentMethod,
  publicProfile,
  post,
  product,
  products,
  productsCategories,
  publishBlogPostCover,
  postsByCategory,
  postsByTag,
  promotion,
  shipping,
  shippingList,
  user,
  loginRequestCount,
  thankYou,
  search,
});

import React, { Component } from 'react';
import Category from '../../../components/Pages/Products/Category/Category';
import { getProductsCategory } from '../../../store/actions/products/products';

class ProductsCategoryIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    const slug = asPath.substring(19, asPath.length);
    store.dispatch(getProductsCategory(slug));
    return { isServer };
  }
  render() {
    return <Category />;
  }
}

export default ProductsCategoryIndex;

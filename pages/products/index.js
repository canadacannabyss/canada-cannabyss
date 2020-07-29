import React, { Component } from 'react';
import Products from '../../components/Pages/Products/Products';
import { getProducts } from '../../store/actions/products/products';

class ProductsIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    store.dispatch(getProducts());
    return { isServer };
  }
  render() {
    return <Products />;
  }
}

export default ProductsIndex;

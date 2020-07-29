import React, { Component } from 'react';
import Product from '../../components/Pages/Product/Product';
import {
  getProduct,
  updateHowManyViewed,
} from '../../store/actions/product/product';

class ProductIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    const slug = asPath.substring(9, asPath.length);
    store.dispatch(getProduct(slug));
    store.dispatch(updateHowManyViewed(slug));
    return { isServer, asPath };
  }

  render() {
    const { asPath } = this.props;
    return <Product pathname={asPath} />;
  }
}

export default ProductIndex;

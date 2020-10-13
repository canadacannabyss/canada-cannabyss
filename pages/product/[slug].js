import React, { Component } from 'react';
import Product from '../../components/Pages/Product/Product';
import {
  getProduct,
  updateHowManyViewed,
} from '../../store/actions/product/product';
import {
  getCryptocurrenciesPaymentMethods,
  getETransfersPaymentMethods,
} from '../../store/actions/accepted-payment-methods/accepted-payment-methods';

class ProductIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    const slug = asPath.substring(9, asPath.length);
    store.dispatch(getProduct(slug));
    store.dispatch(updateHowManyViewed(slug));
    store.dispatch(getCryptocurrenciesPaymentMethods())
    return { isServer, asPath };
  }

  render() {
    const { asPath } = this.props;
    return <Product pathname={asPath} />;
  }
}

export default ProductIndex;

import React, { Component } from 'react';
import Category from '../../components/Pages/Category/Category';
import { getProducts } from '../../store/actions/products/products';
import { getBundles } from '../../store/actions/bundles/bundles';

class CategoryIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    store.dispatch(getProducts());
    store.dispatch(getBundles());
    return { isServer, asPath };
  }
  render() {
    return <Category asPath={this.props.asPath} />;
  }
}

export default CategoryIndex;

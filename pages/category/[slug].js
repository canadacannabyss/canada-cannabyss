import React, { Component } from 'react';
import Category from '../../components/Pages/Category/Category';
import { getProductsCategory } from '../../store/actions/products/products';
import { getBundles } from '../../store/actions/bundles/bundles';

class CategoryIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    const category = asPath.substring(10, asPath.length);
    store.dispatch(getProductsCategory(category, 1, 12));
    // store.dispatch(getBundles());
    return { isServer, asPath };
  }
  render() {
    return <Category asPath={this.props.asPath} />;
  }
}

export default CategoryIndex;

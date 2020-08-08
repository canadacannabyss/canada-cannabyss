import React, { Component } from 'react';
import Category from '../../../components/Pages/Bundles/Category/Category';
import { getBundlesCategory } from '../../../store/actions/bundles/bundles';

class BundlesCategoryIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    const slug = asPath.substring(18, asPath.length);
    console.log('slug:', slug);
    store.dispatch(getBundlesCategory(slug, 1, 1));
    return { isServer };
  }
  render() {
    return <Category />;
  }
}

export default BundlesCategoryIndex;

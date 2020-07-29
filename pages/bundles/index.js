import React, { Component } from 'react';
import Bundles from '../../components/Pages/Bundles/Bundles';
import { getBundles } from '../../store/actions/bundles/bundles';

class BundlesIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    store.dispatch(getBundles());
    return { isServer };
  }
  render() {
    return <Bundles />;
  }
}

export default BundlesIndex;

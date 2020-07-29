import React, { Component } from 'react';
import Home from '../components/Pages/Home/Home';
import {
  getBundles,
  getBanners,
  getMainCategories,
  getMainProducts,
  getNewestProducts,
} from '../store/actions/home/home';

class Index extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    store.dispatch(getMainProducts());
    store.dispatch(getBanners());
    store.dispatch(getBundles());
    store.dispatch(getNewestProducts());
    store.dispatch(getMainCategories());
    return { isServer };
  }
  render() {
    return <Home />;
  }
}

export default Index;

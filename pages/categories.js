import React, { Component } from 'react';
import Categories from '../components/Pages/Categories/Categories';
import { getCategories } from '../store/actions/categories/categories';

class CategoriesIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    store.dispatch(getCategories());
    return { isServer };
  }
  render() {
    return <Categories />;
  }
}

export default CategoriesIndex;

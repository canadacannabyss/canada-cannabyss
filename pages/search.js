import React, { Component } from 'react';
import Search from '../components/Pages/Search/Search';
import { searchItem } from '../store/actions/search/search';

class SearchIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath, query } = props.ctx;
    const { query: queryString, type } = query;
    store.dispatch(searchItem(queryString, type));

    return { isServer, asPath };
  }

  render() {
    const { asPath } = this.props;
    return <Search pathname={asPath} />;
  }
}

export default SearchIndex;

import React, { Component } from 'react';
import Search from '../components/Pages/Search/Search';
import { searchItem } from '../store/actions/search/search';

class SearchIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    const slug = asPath.substring(14, asPath.length);
    console.log('slug:', slug);
    store.dispatch(searchItem(slug));

    return { isServer, asPath };
  }

  render() {
    const { asPath } = this.props;
    return <Search pathname={asPath} />;
  }
}

export default SearchIndex;

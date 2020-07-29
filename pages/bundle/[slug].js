import React, { Component } from 'react';
import Bundle from '../../components/Pages/Bundle/Bundle';
import Error from '../_error';
import {
  getBundle,
  updateHowManyViewed,
} from '../../store/actions/bundle/bundle';

class BundleIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    const slug = asPath.substring(8, asPath.length);
    store.dispatch(getBundle(slug));
    store.dispatch(updateHowManyViewed(slug));
    return { isServer, asPath };
  }

  render() {
    const { asPath } = this.props;
    return <Bundle pathname={asPath} />;
  }
}

export default BundleIndex;

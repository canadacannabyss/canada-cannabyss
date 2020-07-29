import React, { Component } from 'react';
import ThankYou from '../components/Pages/ThankYou/ThankYou';
import { getRecommendedProducts } from '../store/actions/thankYou/thankYou';
import { withAuth } from '../utils/withAuth';

class ThankYouIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    store.dispatch(getRecommendedProducts());
    return { isServer };
  }
  render() {
    return <ThankYou />;
  }
}

// export default withAuth(ThankYouIndex);
export default ThankYouIndex;

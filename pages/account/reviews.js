import React, { Component } from 'react';
import { withAuth } from '../../utils/withAuth';
import Reviews from '../../components/Pages/Account/Reviews';

class ReviewsIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <Reviews />;
  }
}

export default withAuth(ReviewsIndex);

import React, { Component } from 'react';
import Finish from '../../components/Pages/Checkout/Finish';
import { withAuth } from '../../utils/withAuth';

class CheckoutFinish extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <Finish />;
  }
}

export default withAuth(CheckoutFinish);

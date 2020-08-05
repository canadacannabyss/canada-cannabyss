import React, { Component } from 'react';
import { withAuth } from '../../utils/withAuth';
import Shipping from '../../components/Pages/Account/Shipping';

class ShippingIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <Shipping />;
  }
}

export default withAuth(ShippingIndex);

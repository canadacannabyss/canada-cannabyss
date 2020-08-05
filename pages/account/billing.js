import React, { Component } from 'react';
import { withAuth } from '../../utils/withAuth';
import Billing from '../../components/Pages/Account/Billing';

class BillingIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <Billing />;
  }
}

export default withAuth(BillingIndex);

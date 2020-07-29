import React, { Component } from 'react';
import Account from '../../components/Pages/Account/Account';
import { withAuth } from '../../utils/withAuth';

class AccountIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <Account />;
  }
}

export default withAuth(AccountIndex);

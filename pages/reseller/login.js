import React, { Component } from 'react';
import Login from '../../components/Pages/Reseller/Login';

class ResellerLoginIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }

  render() {
    return <Login />;
  }
}

export default ResellerLoginIndex;

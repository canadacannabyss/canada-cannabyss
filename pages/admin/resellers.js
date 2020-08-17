import React, { Component } from 'react';
import Resellers from '../../components/Pages/Admin/Reseller';

class AdminResellers extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <Resellers />;
  }
}

export default AdminResellers;

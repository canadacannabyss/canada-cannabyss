import React, { Component } from 'react';
import AdminOrders from '../../components/Pages/Admin/Orders';
import { withAdminAuth } from '../../utils/withAdminAuth';

class AdminOrdersIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <AdminOrders />;
  }
}

export default withAdminAuth(AdminOrdersIndex);

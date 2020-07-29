import React, { Component } from 'react';
import AdminProducts from '../../components/Pages/Admin/Products';
import { withAdminAuth } from '../../utils/withAdminAuth';

class AdminProductsIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <AdminProducts />;
  }
}

export default withAdminAuth(AdminProductsIndex);

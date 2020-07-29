import React, { Component } from 'react';
import AdminCoupons from '../../components/Pages/Admin/Coupons';
import { withAdminAuth } from '../../utils/withAdminAuth';

class AdminCouponsIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <AdminCoupons />;
  }
}

export default withAdminAuth(AdminCouponsIndex);

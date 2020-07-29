import React, { Component } from 'react';
import AddCoupon from '../../../components/Pages/Admin/Add/Coupon/Coupon';
import { withAdminAuth } from '../../../utils/withAdminAuth';

class AddCouponIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <AddCoupon />;
  }
}

export default withAdminAuth(AddCouponIndex);

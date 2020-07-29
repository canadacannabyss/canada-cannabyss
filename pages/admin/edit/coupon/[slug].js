import React, { Component } from 'react';
import EditCoupon from '../../../../components/Pages/Admin/Edit/Coupon';
import { withAdminAuth } from '../../../../utils/withAdminAuth';

class EditCouponIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    return { isServer };
  }
  render() {
    return <EditCoupon />;
  }
}

export default withAdminAuth(EditCouponIndex);

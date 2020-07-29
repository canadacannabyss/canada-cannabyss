import React, { Component } from 'react';
import AddProduct from '../../../components/Pages/Admin/Add/Product/Product';
import { withAdminAuth } from '../../../utils/withAdminAuth';

class AddCouponIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer, asPath };
  }
  render() {
    return <AddProduct asPath={this.props.asPath} />;
  }
}

export default withAdminAuth(AddCouponIndex);

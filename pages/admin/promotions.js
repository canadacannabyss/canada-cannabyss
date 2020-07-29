import React, { Component } from 'react';
import AdminPromotions from '../../components/Pages/Admin/Promotions';
import { withAdminAuth } from '../../utils/withAdminAuth';

class AdminPromotionsIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <AdminPromotions />;
  }
}

export default withAdminAuth(AdminPromotionsIndex);

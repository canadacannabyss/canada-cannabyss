import React, { Component } from 'react';
import AddPromotion from '../../../components/Pages/Admin/Add/Promotion/Promotion';
import { withAdminAuth } from '../../../utils/withAdminAuth';

class AddPromotionIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <AddPromotion />;
  }
}

export default withAdminAuth(AddPromotionIndex);

import React, { Component } from 'react';
import EditPromotion from '../../../../components/Pages/Admin/Edit/Promotion';
import { withAdminAuth } from '../../../../utils/withAdminAuth';

class EditPromotionIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <EditPromotion />;
  }
}

export default withAdminAuth(EditPromotionIndex);

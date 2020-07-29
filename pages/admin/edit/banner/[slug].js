import React, { Component } from 'react';
import EditBanner from '../../../../components/Pages/Admin/Edit/Banner';
import { withAdminAuth } from '../../../../utils/withAdminAuth';

class EditBannerIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <EditBanner />;
  }
}

export default withAdminAuth(EditBannerIndex);

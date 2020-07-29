import React, { Component } from 'react';
import AddBanner from '../../../components/Pages/Admin/Add/Promotion/Banner/Banner';
import { withAdminAuth } from '../../../utils/withAdminAuth';

class AddBannerIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <AddBanner />;
  }
}

export default withAdminAuth(AddBannerIndex);

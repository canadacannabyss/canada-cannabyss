import React, { Component } from 'react';
import AdminBundles from '../../components/Pages/Admin/Bundles';
import { withAdminAuth } from '../../utils/withAdminAuth';

class AdminBundlesIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <AdminBundles />;
  }
}

export default withAdminAuth(AdminBundlesIndex);

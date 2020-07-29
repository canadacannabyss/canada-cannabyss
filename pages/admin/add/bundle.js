import React, { Component } from 'react';
import AddBundle from '../../../components/Pages/Admin/Add/Bundle/Bundle';
import { withAdminAuth } from '../../../utils/withAdminAuth';

class AddBundleIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <AddBundle />;
  }
}

export default withAdminAuth(AddBundleIndex);

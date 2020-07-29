import React, { Component } from 'react';
import EditBundle from '../../../../components/Pages/Admin/Edit/Bundle';
import { withAdminAuth } from '../../../../utils/withAdminAuth';

class EditBundleIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <EditBundle />;
  }
}

export default withAdminAuth(EditBundleIndex);

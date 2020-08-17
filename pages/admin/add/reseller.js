import React, { Component } from 'react';
import Reseller from '../../../components/Pages/Admin/Add/Reseller/Resellers';
import { withAdminAuth } from '../../../utils/withAdminAuth';

class AddResellerIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <Reseller />;
  }
}

export default withAdminAuth(AddResellerIndex);

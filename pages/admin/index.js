import React, { Component } from 'react';
import Admin from '../../components/Pages/Admin/Admin';
import { withAdminAuth } from '../../utils/withAdminAuth';

class AdminIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <Admin />;
  }
}

export default withAdminAuth(AdminIndex);

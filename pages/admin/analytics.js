import React, { Component } from 'react';
import Analytics from '../../components/Pages/Admin/Analytics';
import { withAdminAuth } from '../../utils/withAdminAuth';

class AnalyticsIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <Analytics />;
  }
}

export default withAdminAuth(AnalyticsIndex);

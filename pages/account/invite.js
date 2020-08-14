import React, { Component } from 'react';
import Invite from '../../components/Pages/Account/Invite';
import { withAuth } from '../../utils/withAuth';

class InviteIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <Invite />;
  }
}

export default withAuth(InviteIndex);

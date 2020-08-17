import React, { Component } from 'react';
import Registration from '../../../components/Pages/Reseller/Registration/Registration';

class ResellerRegistrationIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    const token = asPath.substring(23, asPath.length);
    return { isServer, token };
  }

  render() {
    const { token } = this.props;
    return <Registration token={token} />;
  }
}

export default ResellerRegistrationIndex;

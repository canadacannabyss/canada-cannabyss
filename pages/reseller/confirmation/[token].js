import React, { Component } from 'react';
import Confirmation from '../../../components/Pages/Reseller/Confirmation/Confirmation';

class ResellerConfirmationIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    const token = asPath.substring(23, asPath.length);
    return { isServer, token };
  }

  render() {
    const { token } = this.props;
    return <Confirmation token={token} />;
  }
}

export default ResellerConfirmationIndex;

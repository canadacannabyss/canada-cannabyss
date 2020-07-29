import React, { Component } from 'react';
import Confirmation from '../../../components/Pages/Admin/Confirmation/Confirmation';

class ConfirmationIndex extends Component {
  static async getInitialProps(props) {
    const { isServer, asPath } = props.ctx;
    const token = asPath.substring(20, asPath.length);
    console.log('slug:', token);
    return { isServer, token };
  }

  render() {
    const { token } = this.props;
    return <Confirmation token={token} />;
  }
}

export default ConfirmationIndex;

import React, { Component } from 'react';
import ResetPassword from '../../../components/Pages/Admin/ResetPassword/ResetPasswordToken';

class ResetPasswordToken extends Component {
  static async getInitialProps(props) {
    const { isServer, asPath } = props.ctx;
    const token = asPath.substring(22, asPath.length);
    console.log('slug:', token);
    return { isServer, token };
  }

  render() {
    const { token } = this.props;
    return <ResetPassword token={token} />;
  }
}

export default ResetPasswordToken;

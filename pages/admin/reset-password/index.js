import React, { Component } from 'react';
import ResetPassword from '../../../components/Pages/Admin/ResetPassword/ResetPassword';

class ResetPasswordIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <ResetPassword />;
  }
}

export default ResetPasswordIndex;

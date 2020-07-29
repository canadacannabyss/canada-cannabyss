import React, { Component } from 'react';
import Login from '../../components/Pages/Admin/Login';

class AdminLogin extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <Login />;
  }
}

export default AdminLogin;

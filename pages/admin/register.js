import React, { Component } from 'react';
import Register from '../../components/Pages/Admin/Register';

class AdminRegisterIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <Register />;
  }
}

export default AdminRegisterIndex;

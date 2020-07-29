import React, { Component } from 'react';
import ResetPassword from '../../components/Pages/ResetPassword/ResetPassword';
import {
  getProduct,
  updateHowManyViewed,
} from '../../store/actions/product/product';

class ResetPasswordIndex extends Component {
  static async getInitialProps(props) {
    const { isServer, asPath } = props.ctx;
    const token = asPath.substring(16, asPath.length);
    console.log('slug:', token);
    return { isServer, token };
  }

  render() {
    const { token } = this.props;
    return <ResetPassword token={token} />;
  }
}

export default ResetPasswordIndex;

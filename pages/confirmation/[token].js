import React, { Component } from 'react';
import Confirmation from '../../components/Pages/Confirmation/Confirmation';
import {
  getProduct,
  updateHowManyViewed,
} from '../../store/actions/product/product';

class ConfirmationIndex extends Component {
  static async getInitialProps(props) {
    const { isServer, asPath } = props.ctx;
    const token = asPath.substring(14, asPath.length);
    console.log('slug:', token);
    return { isServer, token };
  }

  render() {
    const { token } = this.props;
    return <Confirmation token={token} />;
  }
}

export default ConfirmationIndex;

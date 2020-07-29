import React, { Component } from 'react';
import PaymentMethod from '../../components/Pages/Checkout/PaymentMethod';
import { withAuth } from '../../utils/withAuth';

class CheckoutPaymentMethod extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    const state = store.getState();
    console.log('store.getState():', state);
    return { isServer };
  }
  render() {
    return <PaymentMethod />;
  }
}

export default withAuth(CheckoutPaymentMethod);

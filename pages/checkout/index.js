import React, { Component } from 'react';
import Checkout from '../../components/Pages/Checkout/Checkout';
import { getBillingAddresses } from '../../store/actions/billing/billingList';
import { getShippingAddresses } from '../../store/actions/shipping/shippingList';
import { withAuth } from '../../utils/withAuth';

class CheckoutIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    const user = store.getState();
    console.log('user checkout:', user);
    store.dispatch(getBillingAddresses(user.data._id));
    store.dispatch(getShippingAddresses(user.data._id));
    return { isServer };
  }
  render() {
    return <Checkout />;
  }
}

export default withAuth(CheckoutIndex);

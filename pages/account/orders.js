import React, { Component } from 'react';
import Orders from '../../components/Pages/Account/Orders';
import { withAuth } from '../../utils/withAuth';
import { getUserOrders } from '../../store/actions/orders/orders';

class OrderIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    const state = store.getState();
    console.log('user orders uysrer:', state);
    // console.log('userOrders:', store.getState());
    // store.dispatch(getUserOrders(user.data._id));
    return { isServer };
  }
  render() {
    return <Orders />;
  }
}

export default withAuth(OrderIndex);

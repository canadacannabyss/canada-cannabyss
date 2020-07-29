import React, { Component } from 'react';
import Cart from '../components/Pages/Cart/Cart';

class CartIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <Cart />;
  }
}

export default CartIndex;

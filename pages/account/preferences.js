import React, { Component } from "react";
import Orders from "../../components/Pages/Account/Orders";

class OrderIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <Orders />;
  }
}

export default OrderIndex;

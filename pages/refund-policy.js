import React, { Component } from "react";

import RefundPolicy from "../components/Pages/RefundPolicy/RefundPolicy";

class RefundPolicyIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <RefundPolicy />;
  }
}

export default RefundPolicyIndex;

import React, { Component } from "react";

import ProcessingPolicy from "../components/Pages/ProcessingPolicy/ProcessingPolicy";

class ProcessingPolicyIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <ProcessingPolicy />;
  }
}

export default ProcessingPolicyIndex;

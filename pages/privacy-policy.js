import React, { Component } from "react";

import PrivacyPolicy from "../components/Pages/PrivacyPolicy/PrivacyPolicy";

class PrivacyPolicyIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <PrivacyPolicy />;
  }
}

export default PrivacyPolicyIndex;

import React, { Component } from "react";

import TermsOfUse from "../components/Pages/TermsOfUse/TermsOfUse";

class TermsOfUseIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    // console.log("store:", store);
    return { isServer };
  }
  render() {
    return <TermsOfUse />;
  }
}

export default TermsOfUseIndex;

import React, { Component } from "react";

import About from "../components/Pages/About/About";

class AboutIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <About />;
  }
}

export default AboutIndex;

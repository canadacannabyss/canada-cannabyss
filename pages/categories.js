import React, { Component } from "react";

import Home from "../components/Pages/Home/Home";

class CategoriesIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <Home />;
  }
}

export default CategoriesIndex;

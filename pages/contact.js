import React, { Component } from "react";

import Contact from "../components/Pages/Contact/Contact";

// import {
//   getPublicProfile,
// } from '../../store/actions/user/publicProfile'

class ContactIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    // console.log("store:", store);
    return { isServer };
  }
  render() {
    return <Contact />;
  }
}

export default ContactIndex;

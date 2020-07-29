import React, { Component } from 'react';
import EditProduct from '../../../../components/Pages/Admin/Edit/Product';
import { withAdminAuth } from '../../../../utils/withAdminAuth';

class EditProductIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    console.log('asPath:', asPath);
    return { isServer, asPath };
  }
  render() {
    return <EditProduct />;
  }
}

export default withAdminAuth(EditProductIndex);

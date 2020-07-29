import React, { Component } from 'react';
import AdminCategories from '../../components/Pages/Admin/Categories';
import { withAdminAuth } from '../../utils/withAdminAuth';

class AdminCategoriesIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;

    return { isServer };
  }
  render() {
    return <AdminCategories />;
  }
}

export default withAdminAuth(AdminCategoriesIndex);

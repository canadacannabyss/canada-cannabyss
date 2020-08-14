import React, { Component } from 'react';
import RegisterReferral from '../components/Pages/RegisterReferral/RegisterReferral';
import { verifyReferral } from '../store/actions/user/user';

class RegisterReferralIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, query } = props.ctx;
    return { isServer, query };
  }
  render() {
    const { query } = this.props;
    console.log('query:', query);
    return <RegisterReferral referral={query.referral} />;
  }
}

export default RegisterReferralIndex;

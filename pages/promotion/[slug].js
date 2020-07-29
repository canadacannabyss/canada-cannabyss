import React, { Component } from 'react';
import Promotion from '../../components/Pages/Promotion/Promotion';
import { getPromotion } from '../../store/actions/promotion/promotion';

class PromotionIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    const slug = asPath.substring(11, asPath.length);

    store.dispatch(getPromotion(slug));
    return { isServer };
  }
  render() {
    return <Promotion />;
  }
}

export default PromotionIndex;

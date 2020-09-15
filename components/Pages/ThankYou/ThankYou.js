import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import _ from 'lodash';
import Head from 'next/head';
import Layout from '../../Layout';
import ThankYouList from '../../UI/Lists/ThankYou/ThankYouList';
import { removeCart } from '../../../store/actions/cart/cart';
import { removeOrder } from '../../../store/actions/order/order';
import { resetBilling } from '../../../store/actions/billing/billing';
import { resetShipping } from '../../../store/actions/shipping/shipping';

import {
  Wrapper,
  GridDiv,
  ThankYouPlate,
  ThankYouTitle,
  MoreProduct,
} from '../../../styles/Pages/ThankYou/ThankYou';

const mapStateToProps = (state) => {
  const { order, cart, user, thankYou } = state;
  return {
    order,
    cart,
    user,
    thankYou,
  };
};

const ThankYouPage = ({ order, cart, thankYou }) => (
  <Layout>
    <Head>
      <title>Thank you for your order</title>
    </Head>
    <Wrapper>
      <ThankYouPlate>
        <ThankYouTitle>Thank you for your order</ThankYouTitle>
      </ThankYouPlate>
      <MoreProduct>
        Here it is a few more things you might like as well
      </MoreProduct>
      <GridDiv>
        {thankYou.fetched && !_.isEmpty(thankYou.data) && !thankYou.error && (
          <ThankYouList products={thankYou.data} />
        )}
      </GridDiv>
    </Wrapper>
  </Layout>
);

export default connect(mapStateToProps)(ThankYouPage);

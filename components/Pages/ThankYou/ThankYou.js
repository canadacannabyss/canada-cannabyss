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
import Logo from '../../../assets/img/canada-cannabyss-logo.webp';

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
      <meta name='description' content='Thank you for your order.' />

      {/* Open Graph */}
      <meta property='og:title' content='Thank you for your order' />
      <meta property='og:type' content='article' />
      <meta
        property='og:url'
        content={`${process.env.SECURED_MAIN_DOMAIN}/thank-you`}
      />
      <meta property='og:description' content='Thank you for your order.' />
      <meta property='og:image' content={Logo} />
      <meta property='og:site_name' content='Canada Cannabyss' />

      {/* Google+ */}
      <meta itemprop='name' content='Thank you for your order' />
      <meta itemprop='description' content='Thank you for your order' />
      <meta itemprop='image' content={Logo} />

      {/* Twitter */}
      <meta name='twitter:card' content='product' />
      <meta name='twitter:site' content='@canadacannabyss' />
      <meta name='twitter:title' content='Thank you for your order' />
      <meta name='twitter:description' content='Thank you for your order.' />
      <meta name='twitter:creator' content='@canadacannabyss' />
      <meta name='twitter:image' content={Logo} />
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

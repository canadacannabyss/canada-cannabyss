import _, { unset } from 'lodash';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../../store/actions/cart/cart';
import {
  CartDiv,
  CartSubTotal,
  CouponForm,
  ProceedLink,
  ProceedLinkDisable,
  SubTotalDiv,
  Values,
  Wrapper,
} from '../../../styles/Pages/Cart/Cart';
import Layout from '../../Layout';
import CartListPage from '../../UI/Lists/Cart/CartListPage';
import Coupons from '../../UI/Navbar/Tabs/Cart/Coupons/Coupons';
import Logo from '../../../assets/img/canada-cannabyss-logo.webp';

const mapStateToProps = (state) => {
  const { cart, order } = state;
  return { cart, order };
};

const Cart = (props) => {
  const { cart, order } = props;
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    if (!_.isEmpty(cart.data.items) && cart.fetched) {
      dispatch(removeItemFromCart(item, cart.data._id));
    }
  };

  const toFloatNumber = (value) => {
    return parseFloat(value).toFixed(2);
  };

  return (
    <Layout>
      <Head>
        <title>Cart - Canada Cannabysss</title>
        <meta
          name="description"
          content="Canada Cannabyss shopping cart page."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Cart - Canada Cannabysss" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`${process.env.SECURED_MAIN_DOMAIN}/cart`}
        />
        <meta
          property="og:description"
          content="Canada Cannabyss shopping cart page."
        />
        <meta property="og:image" content={Logo} />
        <meta property="og:site_name" content="Canada Cannabyss" />

        {/* Google+ */}
        <meta itemprop="name" content="Cart - Canada Cannabysss" />
        <meta
          itemprop="description"
          content="Canada Cannabyss shopping cart page"
        />
        <meta itemprop="image" content={Logo} />

        {/* Twitter */}

        <meta name="twitter:card" content="product" />
        <meta name="twitter:site" content="@canadacannabyss" />
        <meta name="twitter:title" content="Cart - Canada Cannabysss" />
        <meta
          name="twitter:description"
          content="Canada Cannabyss shopping cart page."
        />
        <meta name="twitter:creator" content="@canadacannabyss" />
        <meta name="twitter:image" content={Logo} />
      </Head>
      <Wrapper>
        <CartSubTotal>
          <CartDiv>
            {!_.isEmpty(cart.data) && cart.fetched && (
              <CartListPage
                items={cart.data.items}
                handleRemoveItem={handleRemoveItem}
              />
            )}
          </CartDiv>
          <SubTotalDiv>
            {!_.isEmpty(order.data) && order.fetched && (
              <>
                <Values>
                  <b>Item(s) Subtotal:</b> C${' '}
                  {toFloatNumber(order.data.subtotal)}
                </Values>
                <Values>
                  <b>Shipping {'&'} Handling:</b> C${' '}
                  {toFloatNumber(order.data.shipping.shippingHandling)}
                </Values>
                {/* <Values>
                  <b>Coupon:</b>{' '}
                  {order.data.coupon === null ? (
                    <>{'Not Applied'}</>
                  ) : (
                    <>{order.data.coupon.couponName}</>
                  )}
                </Values> */}
                {/* <Values>
                  <b>Total Before Tax:</b> C${' '}
                  {toFloatNumber(order.data.totalBeforeTax)}
                </Values> */}
                {/* <Values>
                  <b>Estimated GST/HST:</b> C${' '}
                  {toFloatNumber(order.data.gstHst)}
                </Values> */}
                {/* <Values>
                  <b>Estimated PST/RST:</b> Calculated later on checkout
                  </Values> */}
                <Values>
                  <b>Total:</b> C$ {toFloatNumber(order.data.total)}
                </Values>
              </>
            )}
            <SubTotalDiv />
            <Coupons
              style={{
                margin: unset,
              }}
              order={order}
            />
            <br />
            {!_.isEmpty(cart.data) && cart.data.items.length ? (
              <Link href="/checkout" as="/checkout">
                <ProceedLink>
                  <a>Checkout</a>
                </ProceedLink>
              </Link>
            ) : (
              <ProceedLinkDisable>
                <a>Checkout</a>
              </ProceedLinkDisable>
            )}
          </SubTotalDiv>
        </CartSubTotal>
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Cart);

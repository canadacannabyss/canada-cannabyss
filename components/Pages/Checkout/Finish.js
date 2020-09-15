import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import {
  FaPen,
  FaSpinner,
  FaCreditCard,
  FaStream,
  FaFile,
} from 'react-icons/fa';
import { connect, useDispatch } from 'react-redux';
import {
  updateCompletedOrder,
  removeOrder,
} from '../../../store/actions/order/order';
import {
  updateCompletedCart,
  removeCart,
  takeAmountOfItemsPurchase,
} from '../../../store/actions/cart/cart';
import { resetBilling } from '../../../store/actions/billing/billing';
import { resetShipping } from '../../../store/actions/shipping/shipping';

import Layout from '../../Layout';

import {
  Wrapper,
  CheckoutFlex,
  CheckoutProcessStep,
  FinishPricesDiv,
  FinishDiv,
  PricesDiv,
  SubTotalDiv,
  Div,
  TitleDiv,
  ShippingBillingPaymentMethodH2,
  Label,
  P,
  NotApplied,
  FinishCheckoutBtn,
  Loading,
  LoadingLabel,
  LoadingP,
} from '../../../styles/Pages/Checkout/Finish';
import Cart from './Finish/Cart';
import Shipping from './Finish/Shipping';
import Billing from './Finish/Billing';
import PaymentMethod from './Finish/PaymentMethod';
import Values from './Finish/Values';

const payment = {
  method: 'Credit Card',
  cardInfo: {
    cardNumber: '4444 4444 4444 4444',
    cardHolderName: 'Davi Silva',
    expiry: '02/42',
    cvc: '234',
  },
};

const mapStateToProps = (state) => {
  const { order, cart, user } = state;
  return {
    order,
    cart,
    user,
  };
};

const Finish = (props) => {
  const { order, cart, user } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (order.data.completed && cart.data.completed) {
      if (
        order.fetched &&
        !_.isEmpty(order.data) &&
        cart.fetched &&
        !_.isEmpty(cart.data)
      ) {
        if (order.data.completed && cart.data.completed) {
          dispatch(removeOrder());
          dispatch(removeCart());
          dispatch(resetBilling());
          dispatch(resetShipping());
          Router.push('/thank-you');
        }
      }
    }
    if (_.isEmpty(cart.data.items)) {
      Router.push('/');
    }
  }, [order, cart]);

  const handleCompleteOrder = () => {
    dispatch(updateCompletedOrder(order.data._id));
    dispatch(updateCompletedCart(cart.data._id));
    dispatch(takeAmountOfItemsPurchase(cart.data._id));
  };

  return (
    <Layout>
      <Head>
        <title>Finish | Checkout - Canada Cannabyss</title>
      </Head>
      <Wrapper>
        <CheckoutProcessStep>
          <CheckoutFlex>
            <div className='div'>
              <div className='step'>
                <FaStream />
              </div>
              <p className='letter'>Billing | Shipping</p>
            </div>
            <div className='div'>
              <div className='step'>
                <FaCreditCard />
              </div>
              <p className='letter'>Payment Method</p>
            </div>
            <div className='div'>
              <div className='current'>
                <FaFile />
              </div>
              <p className='letter'>Review Order</p>
            </div>
          </CheckoutFlex>
        </CheckoutProcessStep>
        <FinishPricesDiv>
          <FinishDiv>
            <Cart cart={cart} order={order} />
            <Shipping order={order} />
            <Billing order={order} />
            <PaymentMethod user={user} order={order} />
          </FinishDiv>
          <SubTotalDiv>
            <Values order={order} />
            <FinishCheckoutBtn
              onClick={() => {
                handleCompleteOrder();
              }}
            >
              Finish Checkout
            </FinishCheckoutBtn>
          </SubTotalDiv>
        </FinishPricesDiv>
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Finish);

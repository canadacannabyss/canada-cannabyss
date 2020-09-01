import React, { useEffect } from 'react';
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
import CartList from '../../UI/Lists/Checkout/CartList';

import Layout from '../../Layout';

import {
  Wrapper,
  CheckoutFlex,
  CheckoutProcessStep,
  FinishPricesDiv,
  FinishDiv,
  PricesDiv,
  SubTotalDiv,
  Values,
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
      Router.push('/thank-you');
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
            <Div id='div-cart'>
              <TitleDiv>
                <ShippingBillingPaymentMethodH2>
                  Items on cart
                </ShippingBillingPaymentMethodH2>
                {!order.loading && <FaPen />}
              </TitleDiv>
              {order.loading ? (
                <>
                  <LoadingLabel width='75px' />
                  <LoadingP />
                  <LoadingLabel width='75px' />
                  <LoadingP />
                  <LoadingLabel width='65px' />
                  <LoadingP />
                  <LoadingLabel width='100px' />
                  <LoadingP />
                  <LoadingLabel width='35px' />
                  <LoadingP />
                  <LoadingLabel width='85px' />
                  <LoadingP />
                  <LoadingLabel width='85px' />
                  <LoadingP />
                  <LoadingLabel width='80px' />
                  <LoadingP />
                </>
              ) : (
                <>
                  {order.fetched && (
                    <>
                      {!_.isEmpty(cart.data) ? (
                        <>
                          <CartList items={cart.data.items} />
                        </>
                      ) : (
                        <>
                          <P>
                            <strong>Error</strong>
                          </P>
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </Div>
            <Div id='div-shipping'>
              <TitleDiv>
                <ShippingBillingPaymentMethodH2>
                  Shipping Address
                </ShippingBillingPaymentMethodH2>
                {!order.loading && <FaPen />}
              </TitleDiv>
              {order.loading ? (
                <>
                  <LoadingLabel width='75px' />
                  <LoadingP />
                  <LoadingLabel width='75px' />
                  <LoadingP />
                  <LoadingLabel width='65px' />
                  <LoadingP />
                  <LoadingLabel width='100px' />
                  <LoadingP />
                  <LoadingLabel width='35px' />
                  <LoadingP />
                  <LoadingLabel width='85px' />
                  <LoadingP />
                  <LoadingLabel width='85px' />
                  <LoadingP />
                  <LoadingLabel width='80px' />
                  <LoadingP />
                </>
              ) : (
                <>
                  {order.fetched && (
                    <>
                      {!_.isEmpty(order.data) ? (
                        <>
                          <Label>First Name</Label>
                          <P>{order.data.shippingAddress.name.first}</P>
                          <Label>Last Name</Label>
                          <P>{order.data.shippingAddress.name.last}</P>
                          <Label>Country</Label>
                          <P>{order.data.shippingAddress.country}</P>
                          <Label>Province / State</Label>
                          <P>{order.data.shippingAddress.provinceState}</P>
                          <Label>City</Label>
                          <P>{order.data.shippingAddress.city}</P>
                          <Label>Address Line 1</Label>
                          <P>{order.data.shippingAddress.addressLine1}</P>
                          <Label>Address Line 2</Label>
                          {order.data.shippingAddress.addressLine2.length ==
                          0 ? (
                            <NotApplied>No Applied</NotApplied>
                          ) : (
                            <P>{order.data.shippingAddress.addressLine2}</P>
                          )}
                          <Label>Postal Code</Label>
                          <P>{order.data.shippingAddress.postalCode}</P>
                        </>
                      ) : (
                        <>
                          <P>
                            <strong>Error</strong>
                          </P>
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </Div>
            <Div id='div-billing'>
              <TitleDiv>
                <ShippingBillingPaymentMethodH2>
                  Billing Address Address
                </ShippingBillingPaymentMethodH2>
                {!order.loading && <FaPen />}
              </TitleDiv>

              {order.loading ? (
                <>
                  <LoadingLabel width='75px' />
                  <LoadingP />
                  <LoadingLabel width='75px' />
                  <LoadingP />
                  <LoadingLabel width='65px' />
                  <LoadingP />
                  <LoadingLabel width='100px' />
                  <LoadingP />
                  <LoadingLabel width='35px' />
                  <LoadingP />
                  <LoadingLabel width='85px' />
                  <LoadingP />
                  <LoadingLabel width='85px' />
                  <LoadingP />
                  <LoadingLabel width='80px' />
                  <LoadingP />
                </>
              ) : (
                <>
                  {order.fetched && (
                    <>
                      {!_.isEmpty(order.data) ? (
                        <>
                          <Label>First Name</Label>
                          <P>{order.data.billingAddress.name.first}</P>
                          <Label>Last Name</Label>
                          <P>{order.data.billingAddress.name.last}</P>
                          <Label>Country</Label>
                          <P>{order.data.billingAddress.country}</P>
                          <Label>Province / State</Label>
                          <P>{order.data.billingAddress.provinceState}</P>
                          <Label>City</Label>
                          <P>{order.data.billingAddress.city}</P>
                          <Label>Address Line 1</Label>
                          <P>{order.data.billingAddress.addressLine1}</P>
                          <Label>Address Line 2</Label>
                          {order.data.billingAddress.addressLine2.length ==
                          0 ? (
                            <NotApplied>No Applied</NotApplied>
                          ) : (
                            <P>{order.data.billingAddress.addressLine2}</P>
                          )}
                          <Label>Postal Code</Label>
                          <P>{order.data.billingAddress.postalCode}</P>
                        </>
                      ) : (
                        <>
                          <P>
                            <strong>Error</strong>
                          </P>
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </Div>
            <Div id='div-payment-method'>
              <TitleDiv>
                <ShippingBillingPaymentMethodH2>
                  Payment Method
                </ShippingBillingPaymentMethodH2>
                {!order.loading && <FaPen />}
              </TitleDiv>
              <Label>Method</Label>

              {order.loading ? (
                <>
                  <LoadingLabel width='65px' />
                  <LoadingP />
                  <LoadingLabel width='60px' />
                  <LoadingP />
                  <LoadingLabel width='80px' />
                  <LoadingP />
                  <LoadingLabel width='160px' />
                  <LoadingP />
                </>
              ) : (
                <>
                  {order.fetched && (
                    <>
                      {!_.isEmpty(order.data) ? (
                        <>
                          {order.data.paymentMethod.card.provider !== null &&
                            order.data.paymentMethod.card.id !== null && (
                              <>
                                <P>{payment.method}</P>
                                <Label>Card Number</Label>
                                <P>{payment.cardInfo.cardNumber}</P>
                                <Label>Card Holder</Label>
                                <P>{payment.cardInfo.cardHolderName}</P>
                                <Label>Expiry Date</Label>
                                <P>{payment.cardInfo.expiry}</P>
                                <Label>CVC</Label>
                                <P>{payment.cardInfo.cvc}</P>
                              </>
                            )}
                          {order.data.paymentMethod.cryptoCurrency.currency !==
                            null &&
                            order.data.paymentMethod.cryptoCurrency.address !==
                              null && (
                              <>
                                <P>Crypto Currency</P>
                                <Label>Crypto Currency</Label>
                                <P>
                                  {
                                    order.data.paymentMethod.cryptoCurrency
                                      .currency
                                  }
                                </P>
                                <Label>{`${order.data.paymentMethod.cryptoCurrency.currency} Wallet`}</Label>
                                <P>
                                  {
                                    order.data.paymentMethod.cryptoCurrency
                                      .address
                                  }
                                </P>
                              </>
                            )}
                          {order.data.paymentMethod.eTransfer && (
                            <>
                              <P>e-Transfer</P>
                              <Label>Sender</Label>
                              <P>{user.data.email}</P>
                              <Label>Recipient</Label>
                              <P>payments@canadacannabyss.com</P>
                              <Label>Attach on e-Transfer message</Label>
                              <P>{order.data._id}</P>
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          <P>
                            <strong>Error</strong>
                          </P>
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </Div>
          </FinishDiv>
          <SubTotalDiv>
            <Values>
              <b>Item(s) Subtotal:</b> C$ {order.data.subtotal}
            </Values>
            <Values>
              <b>Shipping & Handling:</b> C${' '}
              {order.data.shipping.shippingHandling}
            </Values>
            <Values>
              <b>Coupon:</b>{' '}
              {order.data.coupon === null ? (
                <>{'Not Applied'}</>
              ) : (
                <>{order.data.coupon.couponName}</>
              )}
            </Values>
            <Values>
              <b>Total Before Tax:</b> C$ {order.data.totalBeforeTax}
            </Values>
            <Values>
              <b>Estimated GST/HST:</b> C$ {order.data.gstHst}
            </Values>
            <Values>
              <b>Estimated PST/RST:</b> C$ {order.data.pstRst}
            </Values>
            <Values>
              <b>Total:</b> C$ {order.data.total}
            </Values>
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

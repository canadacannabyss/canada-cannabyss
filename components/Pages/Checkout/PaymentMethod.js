import _ from 'lodash';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaBitcoin, FaCreditCard, FaStream, FaFile } from 'react-icons/fa';
import { connect, useDispatch } from 'react-redux';
import InteracLogo from '../../../assets/img/interac.svg';
import {
  ChoosePaymentMethod,
  CheckoutFlex,
  CheckoutProcessStep,
  ETransferStatement,
  ETransferStatementEmail,
  ETransferStatementH2,
  ETransferStatementH3,
  ETransferStatementVideo,
  CommingSoon,
  ChoosePaymentBtn,
  PaymentForm,
  PaymentMethodList,
  Ol,
  Wrapper,
} from '../../../styles/Pages/Checkout/PaymentMethod';
import PaymentFormFunc from '../../../utils/PaymentForm/PaymentForm';
import Layout from '../../Layout';
import CoinbaseBtn from '../../UI/Buttons/CoinbaseCommerce/CoinbaseCommerce';
import {
  createETranferAsPaymentMethod,
  setETranferAsPaymentMethod,
  getETranferAsPaymentMethod,
} from '../../../store/actions/paymentMethod/paymentMethod';
import { updatePaymentMethodOrder } from '../../../store/actions/order/order';

let count = 0;

const mapStateToProps = (state) => {
  const { user, billing, shipping, order, paymentMethod } = state;
  return {
    user,
    billing,
    shipping,
    order,
    paymentMethod,
  };
};

const PaymentMethodCheckout = (props) => {
  const { user, billing, shipping, order, paymentMethod } = props;
  const dispatch = useDispatch();

  const [cryptoCurrencyMethod, setCryptoCurrencyMethod] = useState(false);
  const [creditCardMethod, setCreditCardMethod] = useState(false);
  const [eTransferMethod, setETranferMethod] = useState(false);
  const [creditCardInfo, setCreditCardInfo] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  const [cardCvc, setCardCvc] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardFocus, setFocus] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  useEffect(() => {
    if (
      eTransferMethod &&
      paymentMethod.fetched &&
      !paymentMethod.loading &&
      _.isEmpty(paymentMethod.data)
    ) {
      dispatch(createETranferAsPaymentMethod(user.data._id));
    }
    if (
      eTransferMethod &&
      paymentMethod.fetched &&
      !paymentMethod.loading &&
      !_.isEmpty(paymentMethod.data) &&
      count === 0
    ) {
      dispatch(setETranferAsPaymentMethod(user.data._id));
      count += 1;
    }
    if (
      eTransferMethod &&
      paymentMethod.fetched &&
      !paymentMethod.loading &&
      !_.isEmpty(paymentMethod.data)
    ) {
      if (paymentMethod.data._id.length > 0) {
        dispatch(
          updatePaymentMethodOrder(order.data._id, paymentMethod.data._id)
        );
      }
    }
  }, [paymentMethod]);

  useEffect(() => {
    if (order.fetched && !_.isEmpty(order.data)) {
      if (!_.isEmpty(order.data.paymentMethod)) {
        Router.push('/checkout/finish');
      }
    }
  }, [order]);

  useEffect(() => {
    if (_.isEmpty(billing.data) || _.isEmpty(shipping.data)) {
      Router.push('/checkout');
    }
  }, []);

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleCvc = (e) => {
    setCardCvc(e.target.value);
  };

  const handleCryptoCurrencyMethod = (e) => {
    const cryptoBtn = document.querySelector('#cryptoBtn');
    const creditCardBtn = document.querySelector('#creditCardBtn');
    const eTransfer = document.querySelector('#eTransfer');
    creditCardBtn.classList.remove('selected');
    eTransfer.classList.remove('selected');
    cryptoBtn.classList.add('selected');
    setCreditCardMethod(false);
    setETranferMethod(false);
    setCryptoCurrencyMethod(true);
  };

  const handleCreditCardMethod = (e) => {
    const cryptoBtn = document.querySelector('#cryptoBtn');
    const creditCardBtn = document.querySelector('#creditCardBtn');
    const eTransfer = document.querySelector('#eTransfer');
    creditCardBtn.classList.add('selected');
    eTransfer.classList.remove('selected');
    cryptoBtn.classList.remove('selected');
    setCreditCardMethod(true);
    setETranferMethod(false);
    setCryptoCurrencyMethod(false);
  };

  const handleETransfer = (e) => {
    const cryptoBtn = document.querySelector('#cryptoBtn');
    const creditCardBtn = document.querySelector('#creditCardBtn');
    const eTransfer = document.querySelector('#eTransfer');
    creditCardBtn.classList.remove('selected');
    eTransfer.classList.add('selected');
    cryptoBtn.classList.remove('selected');
    setCreditCardMethod(false);
    setETranferMethod(true);
    setCryptoCurrencyMethod(false);
  };

  const handleChooseETranfer = () => {
    console.log('clicked etransfer');
    dispatch(getETranferAsPaymentMethod(user.data._id));
  };

  return (
    <Layout>
      <Head>
        <title>Payment Method | Checkout - Canada Cannabysss</title>
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
              <div className='current'>
                <FaCreditCard />
              </div>
              <p className='letter'>Payment Method</p>
            </div>
            <div className='div'>
              <div className='step'>
                <FaFile />
              </div>
              <p className='letter'>Review Order</p>
            </div>
          </CheckoutFlex>
        </CheckoutProcessStep>
        <PaymentMethodList>
          <div>
            <button id='cryptoBtn' onClick={handleCryptoCurrencyMethod}>
              <p>Crypto Currency</p>
            </button>
            <button id='creditCardBtn' onClick={handleCreditCardMethod}>
              <p>Credit Card</p>
            </button>
            <button id='eTransfer' onClick={handleETransfer}>
              <p>e-Transfer</p>
            </button>
          </div>
        </PaymentMethodList>
        {/* {cryptoCurrencyMethod && <CoinbaseBtn />}
        {creditCardMethod && <PaymentFormFunc />} */}
        {cryptoCurrencyMethod && <CommingSoon>Coming Soon</CommingSoon>}
        {creditCardMethod && <CommingSoon>Coming Soon</CommingSoon>}
        {eTransferMethod && (
          <>
            <ETransferStatement>
              <div>
                <p>
                  You can check the status of your package on{' '}
                  <Link href='/account/orders' as='/account/orders'>
                    <a>Orders</a>
                  </Link>{' '}
                  section.
                </p>
                <br />
                <p>In order to successful make the payment following steps:</p>
                <Ol>
                  <li>
                    Make sure to email us as the right email sender:{' '}
                    <ETransferStatementEmail>
                      {user.data.email}
                    </ETransferStatementEmail>
                  </li>
                  <li>
                    Send the money to the following email:{' '}
                    <ETransferStatementEmail>
                      payments@canadacannabyss.com
                    </ETransferStatementEmail>
                  </li>
                  <li>
                    Before finally send it make sure to write the order ID as a
                    message in the e-Tranfer email:{' '}
                    <ETransferStatementEmail>
                      {order.data._id}
                    </ETransferStatementEmail>
                  </li>
                </Ol>
                <br />
                <ETransferStatementH2>
                  HOW TO SEND AN E-TRANSFER
                </ETransferStatementH2>
                <ETransferStatementH3>Send money today:</ETransferStatementH3>
                <Ol>
                  <li>
                    Log in to you banks online website or mobile banking app and
                    navigate to Interac e-Transfer Send Money
                  </li>
                  <li>
                    Select the account you would like funds to be sent from
                  </li>
                  <li>
                    Add or select a contact and fill out the name and e-mail
                    address or mobile phone number of the person you wish to
                    send money to.
                  </li>
                  <li>
                    Type in the specified amount you are sending, along with a
                    personalized message (please write order number here). Enter
                    a security question and answer.
                  </li>
                  <li>
                    We will receive a notification and will deposit the funds to
                    our account.
                  </li>
                </Ol>
                <ETransferStatementH2>
                  What banks offer Interac e-Transfer?
                </ETransferStatementH2>
                <div>
                  <p>
                    You can see the full list here:{' '}
                    <a
                      href='http://interac.ca/en/interac-e-transfer-consumer.html'
                      target='_blank'
                    >
                      http://interac.ca/en/interac-e-transfer-consumer.html
                    </a>
                  </p>
                </div>
                <ETransferStatementH2>
                  We have picked out some of the popular banks and instructional
                  pages for your convenience.
                </ETransferStatementH2>
                <ul class='banks-list'>
                  <li>
                    <a
                      href='https://www.bmo.com/main/personal/bank-accounts/banking-services#transfer-money'
                      target='_blank'
                    >
                      Bank of Montreal
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.cibc.com/en/personal-banking/ways-to-bank/how-to/send-interac-e-transfer.html'
                      target='_blank'
                    >
                      CIBC
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.desjardins.com/ca/personal/accounts-services/ways-to-bank/online/transfer-money-between-accounts/index.jsp'
                      target='_blank'
                    >
                      Desjardins
                    </a>
                  </li>
                  <li>
                    <a
                      href='http://www.rbcroyalbank.com/products/deposits/interac-e-transfer.html'
                      target='_blank'
                    >
                      RBC
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.td.com/ca/en/personal-banking/solutions/ways-to-pay-and-send-money/?tdtab=interac-etransfer'
                      target='_blank'
                    >
                      TD Canada Trust
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ETransferStatementVideo>
                  <iframe
                    src='https://www.youtube.com/embed/zL9yoZZXyOE'
                    frameborder='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen
                  ></iframe>
                </ETransferStatementVideo>
              </div>
            </ETransferStatement>
            <ChoosePaymentBtn
              onClick={() => {
                handleChooseETranfer();
              }}
            >
              Choose e-Transfer
            </ChoosePaymentBtn>
          </>
        )}
        {!creditCardMethod && !cryptoCurrencyMethod && !eTransferMethod && (
          <PaymentForm width='400'>
            <ChoosePaymentMethod>Choose a Payment Method</ChoosePaymentMethod>
          </PaymentForm>
        )}
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(PaymentMethodCheckout);

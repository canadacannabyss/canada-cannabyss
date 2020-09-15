import _ from 'lodash';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaCreditCard, FaStream, FaFile } from 'react-icons/fa';
import { connect, useDispatch } from 'react-redux';
import {
  ChoosePaymentMethod,
  CheckoutFlex,
  CheckoutProcessStep,
  CommingSoon,
  PaymentForm,
  PaymentMethodList,
  Wrapper,
} from '../../../styles/Pages/Checkout/PaymentMethod';
import PaymentFormFunc from '../../../utils/PaymentForm/PaymentForm';
import Layout from '../../Layout';
import CoinbaseBtn from '../../UI/Buttons/CoinbaseCommerce/CoinbaseCommerce';
import {
  createETranferAsPaymentMethod,
  setETranferAsPaymentMethod,
  getETranferAsPaymentMethod,
  createCryptoCurrencyAsPaymentMethod,
  setCryptoCurrencyAsPaymentMethod,
  getCryptoCurrencyAsPaymentMethod,
  setCreditCardAsPaymentMethod,
} from '../../../store/actions/paymentMethod/paymentMethod';
import { updatePaymentMethodOrder } from '../../../store/actions/order/order';
import ETranfer from './ETransfer/ETransfer';
import Cryptocurrency from './Cryptocurrency/Cryptocurrency';

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

  const [
    cryptocurrencyWalletAddress,
    setCryptocurrencyWalletAddress,
  ] = useState('');

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
      cryptoCurrencyMethod &&
      paymentMethod.fetched &&
      !paymentMethod.loading &&
      _.isEmpty(paymentMethod.data)
    ) {
      dispatch(
        createCryptoCurrencyAsPaymentMethod(user.data._id, {
          symbol: 'ETH',
          address: cryptocurrencyWalletAddress,
        })
      );
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
      cryptoCurrencyMethod &&
      paymentMethod.fetched &&
      !paymentMethod.loading &&
      !_.isEmpty(paymentMethod.data) &&
      count === 0
    ) {
      dispatch(
        setCryptoCurrencyAsPaymentMethod(user.data._id, {
          symbol: 'ETH',
          address: cryptocurrencyWalletAddress,
        })
      );
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

    if (
      cryptoCurrencyMethod &&
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

  const onChangeCryptocurrencyWalletAddress = (e) => {
    setCryptocurrencyWalletAddress(e.target.value);
  };

  const handleChooseCryptocurrency = () => {
    console.log('clicked crypto');
    dispatch(
      getCryptoCurrencyAsPaymentMethod(user.data._id, {
        symbol: 'ETH',
        address: cryptocurrencyWalletAddress,
      })
    );
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
              <p>Cryptocurrency</p>
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
        {cryptoCurrencyMethod && (
          <>
            <Cryptocurrency
              cryptocurrencyWalletAddress={cryptocurrencyWalletAddress}
              onChangeCryptocurrencyWalletAddress={
                onChangeCryptocurrencyWalletAddress
              }
              handleChooseCryptocurrency={handleChooseCryptocurrency}
            />
          </>
        )}
        {creditCardMethod && <CommingSoon>Coming Soon</CommingSoon>}
        {eTransferMethod && (
          <>
            <ETranfer
              user={user}
              order={order}
              handleChooseETranfer={handleChooseETranfer}
            />
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

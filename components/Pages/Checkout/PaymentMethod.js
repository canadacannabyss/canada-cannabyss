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
import {
  getCryptocurrenciesPaymentMethods,
  getETransfersPaymentMethods,
} from '../../../store/actions/accepted-payment-methods/accepted-payment-methods';
import Logo from '../../../assets/img/canada-cannabyss-logo.webp';

let count = 0;

const mapStateToProps = (state) => {
  const {
    user,
    billing,
    shipping,
    order,
    paymentMethod,
    acceptedPaymentMethods,
  } = state;
  return {
    user,
    billing,
    shipping,
    order,
    paymentMethod,
    acceptedPaymentMethods,
  };
};

const PaymentMethodCheckout = (props) => {
  const {
    user,
    billing,
    shipping,
    order,
    paymentMethod,
    acceptedPaymentMethods,
  } = props;
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

  const [cryptocurrencySymbol, setCryptocurrencySymbol] = useState('');

  const [cryptoLogoSelected, setCryptoLogoSelected] = useState('');
  const [cryptoSymbolSelected, setCryptoSymbolSelected] = useState('');
  const [cryptoNameSelected, setCryptoNameSelected] = useState('');
  const [
    selectedCryptocurrencyWalletCustomer,
    setSelectedCryptocurrencyWalletCustomer,
  ] = useState('');
  const [
    selectedCryptocurrencyWalletCompany,
    setSelectedCryptocurrencyWalletCompany,
  ] = useState('');

  const [selectedETransferRecipient, setSelectedETransferRecipient] = useState(
    ''
  );

  useEffect(() => {
    if (
      eTransferMethod &&
      paymentMethod.fetched &&
      !paymentMethod.loading &&
      _.isEmpty(paymentMethod.data)
    ) {
      dispatch(
        createETranferAsPaymentMethod(user.data._id, selectedETransferRecipient)
      );
    }

    if (
      cryptoCurrencyMethod &&
      paymentMethod.fetched &&
      !paymentMethod.loading &&
      _.isEmpty(paymentMethod.data)
    ) {
      dispatch(
        createCryptoCurrencyAsPaymentMethod(user.data._id, {
          logo: cryptoLogoSelected,
          symbol: cryptoSymbolSelected,
          name: cryptoNameSelected,
          customerAddress: selectedCryptocurrencyWalletCustomer,
          companyAddress: selectedCryptocurrencyWalletCompany,
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
          logo: cryptoLogoSelected,
          symbol: cryptoSymbolSelected,
          name: cryptoNameSelected,
          customerAddress: selectedCryptocurrencyWalletCustomer,
          companyAddress: selectedCryptocurrencyWalletCompany,
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

  const handleSetCryptoLogoSelected = (logo) => {
    setCryptoLogoSelected(logo);
  };

  const handleSetCryptoSymbolSelected = (symbol) => {
    setCryptoSymbolSelected(symbol);
  };

  const handleSetCryptoNameSelected = (name) => {
    setCryptoNameSelected(name);
  };

  const handleonChangeCryptoWalletSelectedCustomer = (e) => {
    setSelectedCryptocurrencyWalletCustomer(e.target.value);
  };

  const handleonChangeCryptoWalletSelectedCompany = (address) => {
    setSelectedCryptocurrencyWalletCompany(address);
  };

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
    dispatch(
      getETranferAsPaymentMethod(user.data._id, selectedETransferRecipient)
    );
  };

  const onChangeCryptocurrencySymbol = (symbol) => {
    setCryptocurrencySymbol(symbol);
  };

  const handleChooseCryptocurrency = () => {
    console.log('clicked crypto');
    dispatch(
      getCryptoCurrencyAsPaymentMethod(user.data._id, {
        logo: cryptoLogoSelected,
        symbol: cryptoSymbolSelected,
        name: cryptoNameSelected,
        customerAddress: selectedCryptocurrencyWalletCustomer,
        companyAddress: selectedCryptocurrencyWalletCompany,
      })
    );
  };

  const onChangeSelectRecipient = (e) => {
    setSelectedETransferRecipient(e.target.value);
  };

  useEffect(() => {
    if (cryptoCurrencyMethod) {
      dispatch(getCryptocurrenciesPaymentMethods());
    }
  }, [cryptoCurrencyMethod]);

  useEffect(() => {
    if (eTransferMethod) {
      dispatch(getETransfersPaymentMethods());
    }
  }, [eTransferMethod]);

  useEffect(() => {
    if (!_.isEmpty(acceptedPaymentMethods.data.eTransfers)) {
      setSelectedETransferRecipient(
        acceptedPaymentMethods.data.eTransfers[0].eTransfer.recipient
      );
    }
  }, [acceptedPaymentMethods]);

  return (
    <Layout>
      <Head>
        <title>Payment Method | Checkout - Canada Cannabysss</title>
        <meta
          name='description'
          content='Payment Method | Checkout - Canada Cannabysss.'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Payment Method | Checkout - Canada Cannabysss'
        />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content={`${process.env.SECURED_MAIN_DOMAIN}/ckeckout/payment-method`}
        />
        <meta
          property='og:description'
          content='Payment Method | Checkout - Canada Cannabysss.'
        />
        <meta property='og:image' content={Logo} />
        <meta property='og:site_name' content='Canada Cannabyss' />

        {/* Google+ */}
        <meta
          itemprop='name'
          content='Payment Method | Checkout - Canada Cannabysss'
        />
        <meta
          itemprop='description'
          content='Payment Method | Checkout - Canada Cannabysss'
        />
        <meta itemprop='image' content={Logo} />

        {/* Twitter */}
        <meta name='twitter:card' content='product' />
        <meta name='twitter:site' content='@canadacannabyss' />
        <meta
          name='twitter:title'
          content='Payment Method | Checkout - Canada Cannabysss'
        />
        <meta
          name='twitter:description'
          content='Payment Method | Checkout - Canada Cannabysss.'
        />
        <meta name='twitter:creator' content='@canadacannabyss' />
        <meta name='twitter:image' content={Logo} />
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
            {!_.isEmpty(acceptedPaymentMethods.data) &&
              acceptedPaymentMethods.fetched &&
              !acceptedPaymentMethods.loading &&
              !acceptedPaymentMethods.error && (
                <Cryptocurrency
                  cryptocurrencies={
                    acceptedPaymentMethods.data.cryptocurrencies
                  }
                  onChangeCryptocurrencySymbol={onChangeCryptocurrencySymbol}
                  handleChooseCryptocurrency={handleChooseCryptocurrency}
                  handleSetCryptoLogoSelected={handleSetCryptoLogoSelected}
                  cryptoLogoSelected={cryptoLogoSelected}
                  handleSetCryptoSymbolSelected={handleSetCryptoSymbolSelected}
                  cryptoSymbolSelected={cryptoSymbolSelected}
                  handleSetCryptoNameSelected={handleSetCryptoNameSelected}
                  cryptoNameSelected={cryptoNameSelected}
                  handleonChangeCryptoWalletSelectedCustomer={
                    handleonChangeCryptoWalletSelectedCustomer
                  }
                  selectedCryptocurrencyWalletCustomer={
                    selectedCryptocurrencyWalletCustomer
                  }
                  handleonChangeCryptoWalletSelectedCompany={
                    handleonChangeCryptoWalletSelectedCompany
                  }
                />
              )}
          </>
        )}
        {creditCardMethod && <CommingSoon>Coming Soon</CommingSoon>}
        {eTransferMethod && (
          <>
            {!_.isEmpty(acceptedPaymentMethods.data) &&
              acceptedPaymentMethods.fetched &&
              !acceptedPaymentMethods.loading &&
              !acceptedPaymentMethods.error && (
                <ETranfer
                  user={user}
                  order={order}
                  handleChooseETranfer={handleChooseETranfer}
                  eTransfers={acceptedPaymentMethods.data.eTransfers}
                  onChangeSelectRecipient={onChangeSelectRecipient}
                  selectedETransferRecipient={selectedETransferRecipient}
                />
              )}
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

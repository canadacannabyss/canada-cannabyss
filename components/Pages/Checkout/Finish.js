import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { FaCreditCard, FaStream, FaFile, FaInfoCircle } from 'react-icons/fa';
import { connect, useDispatch } from 'react-redux';
import {
  updateCompletedOrder,
  removeOrder,
  updateTotalInCryptocurrencyOrder,
} from '../../../store/actions/order/order';
import {
  updateCompletedCart,
  removeCart,
  takeAmountOfItemsPurchase,
} from '../../../store/actions/cart/cart';
import { resetBilling } from '../../../store/actions/billing/billing';
import { resetShipping } from '../../../store/actions/shipping/shipping';
import { ImageUploader } from 'portrait-load';

import Layout from '../../Layout';
import ETransferModal from '../../UI/Modal/ETransferTutorial/ETransferTutorial';
import CryptocurrencyModal from '../../UI/Modal/CryptocurrencyTutorial/CryptocurrencyTutorial';

import {
  Wrapper,
  CheckoutFlex,
  CheckoutProcessStep,
  FinishPricesDiv,
  FinishDiv,
  PricesDiv,
  SubTotalDiv,
  TransferReceipt,
  Div,
  TitleDiv,
  ShippingBillingPaymentMethodH2,
  Label,
  P,
  NotApplied,
  FinishCheckoutBtnDisable,
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
import AcceptTermsOfUse from '../../UI/Buttons/Checkbox/AcceptTermsOfUse';
import Logo from '../../../assets/img/canada-cannabyss-logo.webp';

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

  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const [imagesArray, setImagesArray] = useState([]);
  const [imagesArrayLength, setImagesArrayLength] = useState(0);

  const [toggleETransferModal, setToggleETransferModal] = useState(false);
  const [toggleCryptocurrencyModal, setToggleCryptocurrencyModal] = useState(false);

  const [acceptTermsOfUse, setAcceptTermsOfUse] = useState(false);

  const [totalInFiat, setTotalInFiat] = useState(0);

  const childRef = useRef();

  const getTotalInCryptocurrency = async (
    totalInFiat,
    cryptocurrencySymbol
  ) => {
    const res = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/cryptocurrencies/get/total/cryptocurrency`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ totalInFiat, cryptocurrencySymbol }),
      }
    );
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const fetchTotalInFiat = async () => {
      const totalInFiatResponse = await getTotalInCryptocurrency(
        order.data.total,
        order.data.paymentMethod.cryptocurrency.symbol
      );
      setTotalInFiat(totalInFiatResponse.totalInCryptocurrency);
    };

    if (
      !_.isEmpty(order.data) &&
      order.fetched &&
      !order.loading &&
      !order.error
    ) {
      if (
        !order.data.paymentMethod.eTransfer.isETransfer &&
        order.data.paymentMethod.cryptocurrency.symbol !== null &&
        order.data.paymentMethod.cryptocurrency.address !== null
      ) {
        fetchTotalInFiat();
      }
    }
  }, [order]);

  const disabledSubmitButton = () => {
    if (imagesArray.length === 1 && acceptTermsOfUse) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };

  useEffect(() => {
    disabledSubmitButton();
  }, [imagesArray, acceptTermsOfUse]);

  const handleSetImagesArray = (images) => {
    setImagesArray(images);
  };

  const handleSubmit = async () => {
    if (allFieldsFilled) {
      setImagesArrayLength(imagesArray.length);
      await childRef.current.handleStartUploadingFiles();
    }
  };

  useEffect(() => {
    if (!_.isEmpty(order) && order.fetched && !order.loading && !order.error) {
      setGlobalVariable();
    }
  }, [order]);

  useEffect(() => {
    if (imagesArray.length > 0) {
      if (imagesArray[0].data !== null && imagesArray[0].data !== undefined) {
        if (imagesArray.length === imagesArrayLength) {
          handleCompleteOrder();
        }
      }
    }
  }, [imagesArray]);

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

  const setGlobalVariable = async () => {
    const bodyRequest = {
      type: 'transfer-receipts',
      title: order.data._id
    };
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/customers/order/set/global-variable`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyRequest)
      }
    );
    return response;
  };

  const handleCompleteOrder = () => {
    const imagesArrayObj = [];
    imagesArray.map((image) => {
      imagesArrayObj.push(image.data._id);
    });
    if (
      !order.data.paymentMethod.eTransfer.isETransfer &&
      order.data.paymentMethod.cryptocurrency.symbol !== null &&
      order.data.paymentMethod.cryptocurrency.address !== null
    ) {
      console.log('cryptocurrency selected');
      dispatch(
        updateTotalInCryptocurrencyOrder(
          order.data._id,
          order.data.total,
          order.data.paymentMethod.cryptocurrency.symbol
        )
      );
    }
    dispatch(updateCompletedOrder(order.data._id, imagesArrayObj));
    dispatch(updateCompletedCart(cart.data._id));
    dispatch(takeAmountOfItemsPurchase(cart.data._id));
  };

  const handleToggleETransfer = () => {
    setToggleETransferModal(!toggleETransferModal);
  };

  const handleToggleCryptocurrency = () => {
    setToggleCryptocurrencyModal(!toggleCryptocurrencyModal);
  };

  const handleCheckAcceptTermsOfUse = () => {
    setAcceptTermsOfUse(!acceptTermsOfUse);
  };

  return (
    <Layout>
      {toggleETransferModal && (
        <ETransferModal
          handleToggleETransfer={handleToggleETransfer}
          transferAmount={order.data.total}
        />
      )}
      {toggleCryptocurrencyModal && (
        <CryptocurrencyModal
          handleToggleCryptocurrency={handleToggleCryptocurrency}
          transferCryptocurrencyAmount={totalInFiat}
          transferCryptocurrencySymbol={order.data.paymentMethod.cryptocurrency.symbol}
          cryptocurrencyName={order.data.paymentMethod.cryptocurrency.name}
          cryptocurrencyCompanyAddress={order.data.paymentMethod.cryptocurrency.companyAddress}
          cryptocurrencyCustomerAddress={order.data.paymentMethod.cryptocurrency.customerAddress}
        />
      )}
      <Head>
        <title>Finish | Checkout - Canada Cannabyss</title>
        <meta
          name='description'
          content='Finish | Checkout - Canada Cannabysss.'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Finish | Checkout - Canada Cannabysss'
        />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content={`${process.env.SECURED_MAIN_DOMAIN}/ckeckout/finish`}
        />
        <meta
          property='og:description'
          content='Finish | Checkout - Canada Cannabysss.'
        />
        <meta property='og:image' content={Logo} />
        <meta property='og:site_name' content='Canada Cannabyss' />

        {/* Google+ */}
        <meta itemprop='name' content='Finish | Checkout - Canada Cannabysss' />
        <meta
          itemprop='description'
          content='Finish | Checkout - Canada Cannabysss'
        />
        <meta itemprop='image' content={Logo} />

        {/* Twitter */}
        <meta name='twitter:card' content='product' />
        <meta name='twitter:site' content='@canadacannabyss' />
        <meta
          name='twitter:title'
          content='Finish | Checkout - Canada Cannabysss'
        />
        <meta
          name='twitter:description'
          content='Finish | Checkout - Canada Cannabysss.'
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
            <Values order={order} totalInFiat={totalInFiat} />
            {!_.isEmpty(order) &&
              order.fetched &&
              !order.loading &&
              !order.error && (
                <>
                  {order.data.paymentMethod.eTransfer.isETransfer !== null &&
                    order.data.paymentMethod.eTransfer.recipient !== null && (
                      <>
                        {order.data.paymentMethod.eTransfer.isETransfer && (
                          <TransferReceipt>
                            e-Transfer Receipt{' '}
                            <button
                              onClick={() => {
                                handleToggleETransfer();
                              }}
                            >
                              <FaInfoCircle />
                            </button>
                          </TransferReceipt>
                        )}
                      </>
                    )}
                  {order.data.paymentMethod.cryptocurrency.symbol !== null &&
                    order.data.paymentMethod.cryptocurrency.address !==
                    null && (
                      <>
                        <TransferReceipt>
                          {order.data.paymentMethod.cryptocurrency.symbol}{' '}
                          Transfer Receipt{' '}
                          <button
                            onClick={() => {
                              handleToggleCryptocurrency();
                            }}
                          >
                            <FaInfoCircle />
                          </button>
                        </TransferReceipt>
                      </>
                    )}
                  <ImageUploader
                    ref={childRef}
                    width='100%'
                    height='120px'
                    imagesArray={imagesArray}
                    handleSetImagesArray={handleSetImagesArray}
                    isDragNotAcceptColor='rgba(0, 0, 0, 0.3)'
                    isDragAcceptColor='#18840f'
                    isDragRejectColor='#ff0000'
                    textColor='#18840f'
                    textSize='14px'
                    multipleFiles={false}
                    onDragMessage='Drop files here'
                    defaultMessage='Drag and Drop the payment receipt'
                    apiEndpoint={`${process.env.MAIN_API_ENDPOINT}/customers/order/create/payment-receipt`}
                  />
                  <br />
                  <AcceptTermsOfUse
                    handleCheckAcceptTermsOfUse={handleCheckAcceptTermsOfUse}
                    acceptTermsOfUse={acceptTermsOfUse}
                  />
                </>
              )}
            {allFieldsFilled ? (
              <FinishCheckoutBtn
                onClick={() => {
                  handleSubmit();
                }}
              >
                Finish Checkout
              </FinishCheckoutBtn>
            ) : (
                <FinishCheckoutBtnDisable>
                  Finish Checkout
                </FinishCheckoutBtnDisable>
              )}
          </SubTotalDiv>
        </FinishPricesDiv>
      </Wrapper>
    </Layout>
  );
};

export default connect(mapStateToProps)(Finish);

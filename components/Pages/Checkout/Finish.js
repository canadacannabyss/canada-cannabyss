import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { FaCreditCard, FaStream, FaFile, FaInfoCircle } from 'react-icons/fa';
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
import { ImageUploader } from 'portrait-load';

import Layout from '../../Layout';
import ETransferModal from '../../UI/Modal/ETransferTutorial/ETransferTutorial';

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

  const [acceptTermsOfUse, setAcceptTermsOfUse] = useState(false);

  const childRef = useRef();

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

  const handleCompleteOrder = () => {
    const imagesArrayObj = [];
    imagesArray.map((image) => {
      imagesArrayObj.push(image.data._id);
    });
    dispatch(updateCompletedOrder(order.data._id, imagesArrayObj));
    dispatch(updateCompletedCart(cart.data._id));
    dispatch(takeAmountOfItemsPurchase(cart.data._id));
  };

  const handleToggleETransfer = () => {
    setToggleETransferModal(!toggleETransferModal);
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
            {!_.isEmpty(order) &&
              order.fetched &&
              !order.loading &&
              !order.error && (
                <>
                  {order.data.paymentMethod.eTransfer && (
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
                  {order.data.paymentMethod.cryptocurrency.symbol !== null &&
                    order.data.paymentMethod.cryptocurrency.address !==
                      null && (
                      <>
                        <TransferReceipt>
                          ETH Transfer Receipt{' '}
                          <button
                            onClick={() => {
                              handleToggleETransfer();
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

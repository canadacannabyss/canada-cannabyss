import React from 'react';
import PropTypes from 'prop-types';
import { FaPen } from 'react-icons/fa';
import _ from 'lodash';
import {
  Div,
  TitleDiv,
  ShippingBillingPaymentMethodH2,
  P,
  LoadingLabel,
  LoadingP,
  Label,
} from '../../../../styles/Pages/Checkout/Finish';

const PaymentMethod = ({ user, order }) => {
  return (
    <Div id='div-payment-method'>
      <TitleDiv>
        <ShippingBillingPaymentMethodH2>
          Payment Method
        </ShippingBillingPaymentMethodH2>
        {/* {!order.loading && <FaPen />} */}
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
                  {order.data.paymentMethod.cryptocurrency.symbol !== null &&
                    order.data.paymentMethod.cryptocurrency.customerAddress !==
                      null && (
                      <>
                        <P>Cryptocurrency</P>
                        <Label>Cryptocurrency</Label>
                        <P>{order.data.paymentMethod.cryptocurrency.symbol}</P>
                        <Label>
                          Sender {order.data.paymentMethod.cryptocurrency.name}{' '}
                          Wallet
                        </Label>
                        <P>
                          {
                            order.data.paymentMethod.cryptocurrency
                              .customerAddress
                          }
                        </P>
                        <Label>
                          Recipient{' '}
                          {order.data.paymentMethod.cryptocurrency.name} Wallet
                        </Label>
                        <P>
                          {
                            order.data.paymentMethod.cryptocurrency
                              .companyAddress
                          }
                        </P>
                      </>
                    )}
                  {order.data.paymentMethod.eTransfer.isETransfer !== null &&
                    order.data.paymentMethod.eTransfer.recipient !== null && (
                      <>
                        <P>e-Transfer</P>
                        <Label>Sender</Label>
                        <P>
                          {!_.isEmpty(user.data) &&
                            user.fetched &&
                            !user.loading &&
                            !user.error &&
                            user.data.email}
                        </P>
                        <Label>Recipient</Label>
                        <P>{order.data.paymentMethod.eTransfer.recipient}</P>
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
  );
};

PaymentMethod.propTypes = {
  user: PropTypes.shape().isRequired,
  order: PropTypes.shape().isRequired,
};

export default PaymentMethod;

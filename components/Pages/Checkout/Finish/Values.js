import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  Div,
  TitleDiv,
  ShippingBillingPaymentMethodH2,
  P,
  LoadingLabel,
  LoadingP,
  Label,
  ValuesP,
} from '../../../../styles/Pages/Checkout/Finish';
const Values = ({ order }) => {
  return (
    <>
      {!_.isEmpty(order.data) &&
        order.fetched &&
        !order.loading &&
        !order.error && (
          <>
            <ValuesP>
              <b>Item(s) Subtotal:</b> C$ {order.data.subtotal}
            </ValuesP>
            <ValuesP>
              <b>Shipping & Handling:</b> C${' '}
              {order.data.shipping.shippingHandling}
            </ValuesP>
            <ValuesP>
              <b>Coupon:</b>{' '}
              {order.data.coupon === null ? (
                <>{'Not Applied'}</>
              ) : (
                <>{order.data.coupon.couponName}</>
              )}
            </ValuesP>
            <ValuesP>
              <b>Total Before Tax:</b> C$ {order.data.totalBeforeTax}
            </ValuesP>
            <ValuesP>
              <b>Estimated GST/HST:</b> C$ {order.data.gstHst}
            </ValuesP>
            <ValuesP>
              <b>Estimated PST/RST:</b> C$ {order.data.pstRst}
            </ValuesP>
            <ValuesP>
              <b>Total:</b> C$ {order.data.total}
            </ValuesP>
          </>
        )}
    </>
  );
};

Values.propTypes = {
  order: PropTypes.shape().isRequired,
};

export default Values;

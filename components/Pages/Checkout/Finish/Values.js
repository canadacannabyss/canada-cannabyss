import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  ValuesP,
  ValuePDiscount,
} from '../../../../styles/Pages/Checkout/Finish';
const Values = ({ order, totalInFiat }) => {
  return (
    <>
      {!_.isEmpty(order.data) &&
        order.fetched &&
        !order.loading &&
        !order.error && (
          <>
            <ValuesP>
              <b>Item(s) Subtotal:</b> C$ {order.data.subtotal}{' '}
              {order.data.paymentMethod !== null && (
                <>
                  {order.data.paymentMethod.cryptocurrency.discount.type !==
                    null &&
                    order.data.paymentMethod.cryptocurrency.discount.type !==
                      null && (
                      <ValuePDiscount>
                        {`-${
                          order.data.paymentMethod.cryptocurrency.discount
                            .amount
                        }${
                          order.data.paymentMethod.cryptocurrency.discount
                            .type === 'percentage' && '%'
                        }`}
                      </ValuePDiscount>
                    )}
                </>
              )}
            </ValuesP>
            <ValuesP>
              <b>Shipping & Handling:</b> C${' '}
              {order.data.shipping.shippingHandling}
            </ValuesP>
            {/* <ValuesP>
              <b>Coupon:</b>{' '}
              {order.data.coupon === null ? (
                <>{'Not Applied'}</>
              ) : (
                <>{order.data.coupon.couponName}</>
              )}
            </ValuesP> */}
            {/* <ValuesP>
              <b>Total Before Tax:</b> C$ {order.data.totalBeforeTax}
            </ValuesP> */}
            {/* <ValuesP>
              <b>Estimated GST/HST:</b> C$ {order.data.gstHst}
            </ValuesP> */}
            {/* <ValuesP>
              <b>Estimated PST/RST:</b> C$ {order.data.pstRst}
            </ValuesP> */}
            <ValuesP>
              <b>Total:</b> C$ {order.data.total}
            </ValuesP>
            {!order.data.paymentMethod.eTransfer.isETransfer &&
              order.data.paymentMethod.cryptocurrency.symbol !== null &&
              order.data.paymentMethod.cryptocurrency.address !== null && (
                <ValuesP>
                  <b>
                    Total in {order.data.paymentMethod.cryptocurrency.symbol}:
                  </b>{' '}
                  {totalInFiat}
                </ValuesP>
              )}
          </>
        )}
    </>
  );
};

Values.propTypes = {
  order: PropTypes.shape().isRequired,
};

export default Values;

import React from 'react';
import PropTypes from 'prop-types';
import { FaPen } from 'react-icons/fa';
import {
  Div,
  TitleDiv,
  ShippingBillingPaymentMethodH2,
  P,
  LoadingLabel,
  LoadingP,
  Label,
  NotApplied
} from '../../../../styles/Pages/Checkout/Finish';

const Shipping = ({ order }) => {
  return (
    <Div id='div-shipping'>
      <TitleDiv>
        <ShippingBillingPaymentMethodH2>
          Shipping Address
        </ShippingBillingPaymentMethodH2>
        {/* {!order.loading && <FaPen />} */}
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
                  {order.data.shippingAddress.addressLine2.length == 0 ? (
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
  );
};

Shipping.propTypes = {
  order: PropTypes.shape().isRequired,
};

export default Shipping;

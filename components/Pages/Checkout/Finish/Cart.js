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
} from '../../../../styles/Pages/Checkout/Finish';
import CartList from '../../../UI/Lists/Checkout/CartList';

const Cart = ({ cart, order }) => {
  return (
    <Div id='div-cart'>
      <TitleDiv>
        <ShippingBillingPaymentMethodH2>
          Items on cart
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
  );
};

Cart.propTypes = {
  cart: PropTypes.shape().isRequired,
  order: PropTypes.shape().isRequired,
};

export default Cart;

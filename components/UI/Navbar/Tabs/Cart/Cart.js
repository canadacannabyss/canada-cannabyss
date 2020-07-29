import _ from 'lodash';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaMoneyBillWave, FaSadTear } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../../../../../store/actions/cart/cart';
import {
  ChangeCurrency,
  CouponForm,
  LinkTo,
  Sep,
  ToCheckout,
  TopButtons,
  TotalDiv,
  TotalNumber,
  EmptyDiv,
  Wrapper,
  WrapperCurrencyChange,
  CouponFormDisable,
} from '../../../../../styles/Components/UI/Navbar/Tabs/Cart/Cart';
import OutsideAlerter from '../../../../../utils/OutsideAlerter';
import CartList from '../../../Lists/Cart/CartList';
import CurrencyChange from './CurrencyChange/CurrencyChange';
import Coupons from './Coupons/Coupons';

const Cart = () => {
  const [toggleCurrencyChange, setToggleCurrencyChange] = useState(false);
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const handleToggleCurrencyChange = () => {
    setToggleCurrencyChange(!toggleCurrencyChange);
  };

  const handleCloseCurrencyChange = () => {
    setToggleCurrencyChange(false);
  };

  const handleRemoveItem = (item) => {
    if (!_.isEmpty(cart.data.items) && cart.fetched) {
      dispatch(removeItemFromCart(item, cart.data._id));
    }
  };

  return (
    <Wrapper>
      {toggleCurrencyChange && (
        <WrapperCurrencyChange>
          <OutsideAlerter handleClose={handleCloseCurrencyChange}>
            <CurrencyChange />
          </OutsideAlerter>
        </WrapperCurrencyChange>
      )}
      <TopButtons>
        <div>
          <ChangeCurrency onClick={handleToggleCurrencyChange}>
            <FaMoneyBillWave />
          </ChangeCurrency>
        </div>
        <div>
          <LinkTo>
            <Link href='/cart' as='/cart'>
              <a>Cart Page</a>
            </Link>
          </LinkTo>
        </div>
      </TopButtons>
      {!_.isEmpty(cart.data.items) &&
      cart.fetched &&
      !cart.loading &&
      !cart.error ? (
        <CartList items={cart.data.items} handleRemoveItem={handleRemoveItem} />
      ) : (
        <EmptyDiv>
          <FaSadTear />
          <p>No products</p>
        </EmptyDiv>
      )}
      <Coupons order={order} />
      <Sep />
      <TotalDiv>
        <TotalNumber>
          {/* C$ <CalculateSubtotal /> */}
          C$ {order.data.subtotal}
        </TotalNumber>
        <Link href='/checkout' as='/checkout'>
          <ToCheckout>
            <a>Checkout</a>
          </ToCheckout>
        </Link>
      </TotalDiv>
    </Wrapper>
  );
};

export default Cart;

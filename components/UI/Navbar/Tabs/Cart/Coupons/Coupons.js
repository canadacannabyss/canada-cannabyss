import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyCouponOrder } from '../../../../../../store/actions/order/order';
import { updateOrderValue } from '../../../../../../store/actions/order/order';
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
} from '../../../../../../styles/Components/UI/Navbar/Tabs/Cart/Coupons/Coupons';

const Coupons = (props) => {
  const { order } = props;

  const dispatch = useDispatch();

  const [couponName, setCouponName] = useState('');

  const onChangeCouponName = (e) => {
    setCouponName(e.target.value);
  };

  const submitCoupon = (e) => {
    e.preventDefault();
    console.log('coupon cart tab order._id:', order._id);
    dispatch(applyCouponOrder(order.data._id, couponName));
    // dispatch(updateOrderValue(order.data._id, order.data.subtotal));
    setCouponName('');
  };

  return (
    <>
      {order.data.subtotal > 0 ? (
        <CouponForm onSubmit={submitCoupon}>
          <input
            type="text"
            placeholder="Coupon"
            onChange={onChangeCouponName}
            value={couponName}
          />
          <button type="submit">Apply</button>
        </CouponForm>
      ) : (
        <CouponFormDisable>
          <input type="text" placeholder="Coupon" disabled />
          <button disabled>Apply</button>
        </CouponFormDisable>
      )}
    </>
  );
};

export default Coupons;

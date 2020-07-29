import _ from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSubtotalOrder } from '../../../store/actions/order/order';

const calcuteSubtotal = () => {
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!_.isEmpty(order.data) && order.fetched) {
      let subtotal = 0;
      if (
        !_.isEmpty(cart.data.products) &&
        cart.fetched &&
        !_.isEmpty(order.data) &&
        order.fetched
      ) {
        cart.data.products.map((product) => {
          subtotal += parseFloat(product.prices.price) * product.quantity;
          console.log(subtotal)
        });
        dispatch(updateSubtotalOrder(order.data._id, subtotal));
      }
    }
  }, [cart]);

  return <>{order.data.subtotal}</>;
};

export default calcuteSubtotal;

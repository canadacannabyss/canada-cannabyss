/* eslint-disable import/prefer-default-export */
export function getUserOrders(userId) {
  return {
    type: 'REQUEST_GET_USER_ORDERS',
    payload: {
      userId,
    },
  };
}

export function getAllOrders() {
  return {
    type: 'REQUEST_GET_ALL_ORDERS',
  };
}

export function updateShippingStatus(orderId, newShippingStatus) {
  return {
    type: 'REQUEST_UPDATE_SHIPPING_STATUS',
    payload: {
      orderId,
      newShippingStatus,
    },
  };
}

export function updatePaymentStatus(orderId, newPaymentStatus) {
  return {
    type: 'REQUEST_UPDATE_PAYMENT_STATUS',
    payload: {
      orderId,
      newPaymentStatus,
    },
  };
}

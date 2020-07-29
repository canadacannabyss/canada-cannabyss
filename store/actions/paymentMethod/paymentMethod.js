/* eslint-disable import/prefer-default-export */
export function getCreditCard(userId, cartId) {
  return {
    type: 'REQUEST_GET_ORDER',
    payload: {
      userId,
      cartId,
    },
  };
}

export function getCreditCards(userId, cartId) {
  return {
    type: 'REQUEST_GET_ORDER',
    payload: {
      userId,
      cartId,
    },
  };
}

export function setCreditCardAsPaymentMethod(orderId, billingId) {
  return {
    type: 'REQUEST_SET_CREDIT_CARD_AS_PAYMENT_METHOD',
    payload: {
      orderId,
      billingId,
    },
  };
}

export function setCryptoCurrencyAsPaymentMethod(orderId, billingId) {
  return {
    type: 'REQUEST_SET_CRYPTO_CURRENCY_AS_PAYMENT_METHOD',
    payload: {
      orderId,
      billingId,
    },
  };
}

export function createETranferAsPaymentMethod(userId) {
  return {
    type: 'REQUEST_CREATE_E_TRANSFER_AS_PAYMENT_METHOD',
    payload: {
      userId,
    },
  };
}

export function setETranferAsPaymentMethod(userId) {
  return {
    type: 'REQUEST_SET_E_TRANSFER_AS_PAYMENT_METHOD',
    payload: {
      userId,
    },
  };
}

export function getETranferAsPaymentMethod(userId) {
  return {
    type: 'REQUEST_GET_E_TRANSFER_AS_PAYMENT_METHOD',
    payload: {
      userId,
    },
  };
}

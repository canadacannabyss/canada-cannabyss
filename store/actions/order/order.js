/* eslint-disable import/prefer-default-export */
export function getOrder(userId, cartId) {
  return {
    type: 'REQUEST_GET_ORDER',
    payload: {
      userId,
      cartId,
    },
  };
}

export function updateSubtotalOrder(orderId, subtotal) {
  return {
    type: 'REQUEST_UPDATE_SUBTOTAL_ORDER',
    payload: {
      orderId,
      subtotal,
    },
  };
}

export function updateOrderValue(orderId, subtotal) {
  return {
    type: 'REQUEST_UPDATE_ORDER_VALUES',
    payload: {
      orderId,
      subtotal,
    },
  };
}

export function updateBillingOrder(billing) {
  return {
    type: 'REQUEST_UPDATE_BILLING_ORDER',
    payload: {
      billing,
    },
  };
}

export function updateShippingOrder(shipping) {
  return {
    type: 'REQUEST_UPDATE_SHIPPING_ORDER',
    payload: {
      shipping,
    },
  };
}

export function updateShippingHandlingOrder(orderId) {
  return {
    type: 'REQUEST_UPDATE_SHIPPING_HANDLING_ORDER',
    payload: {
      orderId,
    },
  };
}

export function resetShippingHandlingOrder(orderId) {
  return {
    type: 'REQUEST_RESET_SHIPPING_HANDLING_ORDER',
    payload: {
      orderId,
    },
  };
}

export function updateBeforeTaxOrder(orderId) {
  return {
    type: 'REQUEST_UPDATE_TOTAL_BEFORE_TAX_ORDER',
    payload: {
      orderId,
    },
  };
}

export function updateGstHstTaxOrder(orderId) {
  return {
    type: 'REQUEST_UPDATE_GST_HST_TAX_ORDER',
    payload: {
      orderId,
    },
  };
}

export function updatePstRstTaxOrder(orderId) {
  return {
    type: 'REQUEST_UPDATE_PST_RST_TAX_ORDER',
    payload: {
      orderId,
    },
  };
}

export function updateTotalOrder(orderId) {
  return {
    type: 'REQUEST_UPDATE_TOTAL_ORDER',
    payload: {
      orderId,
    },
  };
}

export function updatePaymentMethodOrder(orderId, paymentMethodId) {
  return {
    type: 'REQUEST_UPDATE_PAYMENT_METHOD_ORDER',
    payload: {
      orderId,
      paymentMethodId,
    },
  };
}

export function updateCompletedOrder(orderId, imageObj) {
  return {
    type: 'REQUEST_UPDATE_COMPLETED_ORDER',
    payload: {
      orderId,
      imageObj,
    },
  };
}

export function removeOrder() {
  return {
    type: 'REQUEST_REMOVE_ORDER',
  };
}

export function applyCouponOrder(orderId, couponName) {
  return {
    type: 'REQUEST_APPLY_COUPON_ORDER',
    payload: {
      orderId,
      couponName,
    },
  };
}

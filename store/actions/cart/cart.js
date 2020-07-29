/* eslint-disable import/prefer-default-export */
export function getCart(userId) {
  return {
    type: 'REQUEST_GET_CART',
    payload: {
      userId,
    },
  };
}

export function addItemToCart(item, cartId) {
  return {
    type: 'REQUEST_ADD_ITEM_TO_CART',
    payload: {
      item,
      cartId,
    },
  };
}

export function removeItemFromCart(item, cartId) {
  return {
    type: 'REQUEST_REMOVE_ITEM_FROM_CART',
    payload: {
      item,
      cartId,
    },
  };
}

export function updateCompletedCart(cartId) {
  return {
    type: 'REQUEST_UPDATE_COMPLETED_CART',
    payload: {
      cartId,
    },
  };
}

export function takeAmountOfItemsPurchase(cartId) {
  return {
    type: 'REQUEST_TAKE_AMOUNT_OF_ITEMS_PURCHASED',
    payload: {
      cartId,
    },
  };
}

export function removeCart() {
  return {
    type: 'REQUEST_RESET_CART',
  };
}

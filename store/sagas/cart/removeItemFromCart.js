import { call, put } from 'redux-saga/effects';

async function removeItemFromCart(item, cartId) {
  console.log('carting:', cartId);
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/cart/remove/item`,
    {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearerToken,
      },
      body: JSON.stringify({ item, cartId }),
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncRemoveItemFromCart(action) {
  try {
    const response = yield call(
      removeItemFromCart,
      action.payload.item,
      action.payload.cartId
    );
    yield put({
      type: 'SUCCESS_REMOVE_ITEM_FROM_CART',
      payload: { data: response },
    });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_REMOVE_ITEM_FROM_CART' });
  }
}

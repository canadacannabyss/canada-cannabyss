import { call, put } from 'redux-saga/effects';

async function addItemToCart(item, cartId) {
  console.log('carting:', cartId);
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/cart/add/item`,
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
  console.log('add items:', res);
  const data = await res.json();
  return data;
}

export default function* asyncAddProductToCart(action) {
  try {
    const response = yield call(
      addItemToCart,
      action.payload.item,
      action.payload.cartId
    );
    console.log('item added to cart:', response);
    yield put({
      type: 'SUCCESS_ADD_ITEM_TO_CART',
      payload: { data: response },
    });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_ADD_ITEM_TO_CART' });
  }
}

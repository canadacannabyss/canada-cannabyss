import { call, put } from 'redux-saga/effects';

async function getCart(userId) {
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.mainApiEndpoint}/customers/cart/get/cart/user/${userId}`,
    {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearerToken,
      },
    }
  );
  const data = await res.json();
  return data;
}

async function createCart(userId) {
  console.log('userId:', userId);
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.mainApiEndpoint}/customers/cart/create/cart`,
    {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearerToken,
      },
      body: JSON.stringify({ userId }),
    }
  );
  const data = await res.json();
  return data;
}

async function getCartLocalStorageApi() {
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const cartId = localStorage.getItem('cartId');
  const res = await fetch(
    `${process.env.mainApiEndpoint}/customers/cart/get/cart/${cartId}`,
    {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearerToken,
      },
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncGetCart(action) {
  try {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('cartId') === null) {
        const res = yield call(getCart, action.payload.userId);
        if (res === null) {
          const response = yield call(createCart, action.payload.userId);
          localStorage.setItem('cartId', response._id);
          yield put({
            type: 'SUCCESS_GET_CART',
            payload: { data: response },
          });
        } else {
          localStorage.setItem('cartId', res._id);
          yield put({
            type: 'SUCCESS_GET_CART',
            payload: { data: res },
          });
        }
      } else {
        const responseLocalStorage = yield call(getCartLocalStorageApi);
        if (responseLocalStorage === null) {
          localStorage.removeItem('cartId');
          const resLocalStorage = yield call(createCart, action.payload.userId);
          localStorage.setItem('cartId', resLocalStorage._id);
          yield put({
            type: 'SUCCESS_GET_CART',
            payload: { data: resLocalStorage },
          });
        } else {
          yield put({
            type: 'SUCCESS_GET_CART',
            payload: { data: responseLocalStorage },
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_GET_CART' });
  }
}

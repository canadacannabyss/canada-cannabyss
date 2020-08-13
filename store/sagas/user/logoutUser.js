import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getLogoutApi() {
  const bearerToken = `Bearer ${localStorage.getItem('accessToken')}`;
  const res = await fetch(`${process.env.USER_API_ENDPOINT}/auth/logout`, {
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: bearerToken,
    },
    body: JSON.stringify({
      refreshToken: localStorage.setItem('refreshToken'),
    }),
  });
  const data = await res.json();
  return data;
}

export default function* asyncLogoutUser() {
  try {
    // yield call(getLogoutApi);

    if (
      localStorage.getItem('accessToken') !== null ||
      localStorage.getItem('accessToken') !== undefined ||
      localStorage.getItem('accessToken') !== 'undefined'
    ) {
      localStorage.removeItem('accessToken');
    }
    if (
      localStorage.getItem('refreshToken') !== null ||
      localStorage.getItem('refreshToken') !== undefined ||
      localStorage.getItem('refreshToken') !== 'undefined'
    ) {
      localStorage.removeItem('refreshToken');
    }
    if (
      localStorage.getItem('cartId') !== null ||
      localStorage.getItem('cartId') !== undefined ||
      localStorage.getItem('cartId') !== 'undefined'
    ) {
      localStorage.removeItem('cartId');
    }
    if (
      localStorage.getItem('orderId') !== null ||
      localStorage.getItem('orderId') !== undefined ||
      localStorage.getItem('orderId') !== 'undefined'
    ) {
      localStorage.removeItem('orderId');
    }

    yield put({ type: 'SUCCESS_LOGOUT_USER' });
    yield put({ type: 'SUCCESS_EMPTY_ORDER' });
    yield put({ type: 'SUCCESS_EMPTY_CART' });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_LOGOUT_USER' });
  }
}

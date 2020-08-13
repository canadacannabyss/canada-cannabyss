import { call, put } from 'redux-saga/effects';

async function getOrder(userId) {
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/order/get/order/user/${userId}`,
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

async function createOrder(userId, cartId) {
  console.log('userId:', userId);
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/order/create/order`,
    {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearerToken,
      },
      body: JSON.stringify({ userId, cartId }),
    }
  );
  const data = await res.json();
  return data;
}

async function getOrderLocalStorageApi() {
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const orderId = localStorage.getItem('orderId');
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/order/get/order/${orderId}`,
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

export default function* asyncGetOrder(action) {
  try {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('orderId') === null) {
        const res = yield call(getOrder, action.payload.userId);
        if (res === null) {
          const response = yield call(
            createOrder,
            action.payload.userId,
            action.payload.cartId
          );
          localStorage.setItem('orderId', response._id);
          yield put({
            type: 'SUCCESS_GET_ORDER',
            payload: { data: response },
          });
        } else {
          localStorage.setItem('orderId', res._id);
          yield put({
            type: 'SUCCESS_GET_ORDER',
            payload: { data: res },
          });
        }
      } else {
        const responseLocalStorage = yield call(getOrderLocalStorageApi);
        if (responseLocalStorage === null) {
          localStorage.removeItem('orderId');
          const resLocalStorage = yield call(
            createOrder,
            action.payload.userId,
            action.payload.cartId
          );
          localStorage.setItem('orderId', resLocalStorage._id);
          yield put({
            type: 'SUCCESS_GET_ORDER',
            payload: { data: resLocalStorage },
          });
        } else {
          yield put({
            type: 'SUCCESS_GET_ORDER',
            payload: { data: responseLocalStorage },
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_GET_ORDER' });
  }
}

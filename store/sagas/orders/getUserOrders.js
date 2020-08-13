import { call, put } from 'redux-saga/effects';

async function getUserOrders(userId) {
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/orders/get/orders/user/${userId}`,
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
    const response = yield call(getUserOrders, action.payload.userId);

    yield put({ type: 'SUCCESS_GET_USER_ORDERS', payload: { data: response } });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_GET_USER_ORDERS' });
  }
}

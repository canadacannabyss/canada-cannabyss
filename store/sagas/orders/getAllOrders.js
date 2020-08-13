import { call, put } from 'redux-saga/effects';

async function getAllOrders() {
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/admin/orders/get/orders/all`,
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

export default function* asyncGetAllOrder() {
  try {
    const response = yield call(getAllOrders);

    yield put({ type: 'SUCCESS_GET_USER_ORDERS', payload: { data: response } });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_GET_USER_ORDERS' });
  }
}

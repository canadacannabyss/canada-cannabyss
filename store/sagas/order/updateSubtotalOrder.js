import { call, put } from 'redux-saga/effects';

async function updateSubtotalOrder(orderId, subtotal) {
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.mainApiEndpoint}/customers/order/update/subtotal`,
    {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearerToken,
      },
      body: JSON.stringify({ orderId, subtotal }),
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncUpdateSubtotalOrder(action) {
  try {
    const response = yield call(
      updateSubtotalOrder,
      action.payload.orderId,
      action.payload.subtotal
    );
    console.log('subtotal updated:', response);
    yield put({
      type: 'SUCCESS_UPDATE_SUBTOTAL_ORDER',
      payload: { data: response },
    });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_UPDATE_SUBTOTAL_ORDER' });
  }
}

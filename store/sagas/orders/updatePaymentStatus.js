import { call, put } from 'redux-saga/effects';

async function updatePaymentStatus(orderId, newPaymentStatus) {
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.mainApiEndpoint}/admin/orders/update/status/paid`,
    {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearerToken,
      },
      body: JSON.stringify({ orderId, newPaymentStatus }),
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncUpdatePaymentStatusApi(action) {
  try {
    const response = yield call(
      updatePaymentStatus,
      action.payload.orderId,
      action.payload.newPaymentStatus
    );

    console.log('response:', response);

    yield put({
      type: 'SUCCESS_UPDATE_PAYMENT_STATUS',
      payload: { data: response },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_UPDATE_PAYMEMT_STATUS' });
  }
}

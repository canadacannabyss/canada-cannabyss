import { call, put } from 'redux-saga/effects';

async function updateShippingStatus(orderId, newShippingStatus) {
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/admin/orders/update/status/shipping`,
    {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearerToken,
      },
      body: JSON.stringify({ orderId, newShippingStatus }),
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncUpdateShippingStatusApi(action) {
  try {
    const response = yield call(
      updateShippingStatus,
      action.payload.orderId,
      action.payload.newShippingStatus
    );

    console.log(response);

    yield put({
      type: 'SUCCESS_UPDATE_SHIPPING_STATUS',
      payload: { data: response },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_UPDATE_SHIPPING_STATUS' });
  }
}

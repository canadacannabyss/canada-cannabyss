import { call, put } from 'redux-saga/effects';

async function updateShippingHandlingOrder(orderId) {
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.mainApiEndpoint}/customers/order/update/shipping/handling`,
    {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearerToken,
      },
      body: JSON.stringify({ orderId }),
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncUpdateShippingHandlingOrder(action) {
  try {
    const response = yield call(
      updateShippingHandlingOrder,
      action.payload.orderId
    );
    console.log('shipping Handling updated:', response);
    yield put({
      type: 'SUCCESS_UPDATE_SHIPPING_HANDLING_ORDER',
      payload: { data: response },
    });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_UPDATE_SHIPPING_HANDLING_ORDER' });
  }
}

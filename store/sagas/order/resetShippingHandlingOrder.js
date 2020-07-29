import { call, put } from 'redux-saga/effects';

async function resetShippingHandlingOrder(orderId) {
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.mainApiEndpoint}/customers/order/reset/shipping/handling`,
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

export default function* asyncResetShippingHandlingOrder(action) {
  try {
    const response = yield call(
      resetShippingHandlingOrder,
      action.payload.orderId
    );
    console.log('shipping Handling updated:', response);
    yield put({
      type: 'SUCCESS_RESET_SHIPPING_HANDLING_ORDER',
      payload: { data: response },
    });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_RESET_SHIPPING_HANDLING_ORDER' });
  }
}

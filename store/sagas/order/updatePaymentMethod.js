import { call, put } from 'redux-saga/effects';

async function updateOrderPaymentMethod(orderId, paymentMethodId) {
  // const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.mainApiEndpoint}/customers/order/update/payment-method`,
    {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderId, paymentMethodId }),
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncUpdatePaymentMethodOrderApi(action) {
  try {
    const response = yield call(
      updateOrderPaymentMethod,
      action.payload.orderId,
      action.payload.paymentMethodId
    );

    yield put({
      type: 'SUCCESS_UPDATE_PAYMENT_METHOD_ORDER',
      payload: { data: response },
    });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_UPDATE_PAYMENT_METHOD_ORDER' });
  }
}

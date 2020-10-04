import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function createPaymentMethodETransfer(userId, recipient) {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/payment-method/e-transfer/create`,
    {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, recipient }),
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncCreatePaymentMethodETransferApi(action) {
  try {
    const response = yield call(
      createPaymentMethodETransfer,
      action.payload.userId,
      action.payload.recipient
    );

    yield put({
      type: 'SUCCESS_CREATE_E_TRANSFER_AS_PAYMENT_METHOD',
      payload: { data: response },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_CREATE_E_TRANSFER_AS_PAYMENT_METHOD' });
  }
}

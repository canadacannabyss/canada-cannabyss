import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function setPaymentMethodByUserApi(userId) {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/payment-method/e-transfer/get/by/user/${userId}`,
    {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncSetPaymentMethodETransferApi(action) {
  try {
    const response = yield call(
      setPaymentMethodByUserApi,
      action.payload.userId
    );

    yield put({
      type: 'SUCCESS_SET_E_TRANSFER_AS_PAYMENT_METHOD',
      payload: { data: response },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_SET_E_TRANSFER_AS_PAYMENT_METHOD' });
  }
}

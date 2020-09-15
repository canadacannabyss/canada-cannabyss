import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function createPaymentMethodCryptocurrency(userId, cryptocurrency) {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/payment-method/cryptocurrency/create`,
    {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, cryptocurrency }),
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncCreatePaymentMethodCryptocurrencyApi(action) {
  try {
    const response = yield call(
      createPaymentMethodCryptocurrency,
      action.payload.userId,
      action.payload.cryptocurrency
    );

    yield put({
      type: 'SUCCESS_CREATE_CRYPTO_CURRENCY_AS_PAYMENT_METHOD',
      payload: { data: response },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_CREATE_CRYPTO_CURRENCY_AS_PAYMENT_METHOD' });
  }
}

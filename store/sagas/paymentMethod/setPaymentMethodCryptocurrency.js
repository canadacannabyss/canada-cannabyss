import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function setPaymentMethodByUserApi(userId, cryptocurrency) {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/payment-method/cryptocurrency/get/by/user/${userId}?symbol=${cryptocurrency.symbol}&address=${cryptocurrency.address}`,
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

export default function* asyncSetPaymentMethodCryptocurrencyApi(action) {
  try {
    const response = yield call(
      setPaymentMethodByUserApi,
      action.payload.userId,
      action.payload.cryptocurrency
    );

    yield put({
      type: 'SUCCESS_SET_CRYPTO_CURRENCY_AS_PAYMENT_METHOD',
      payload: { data: response },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_SET_CRYPTO_CURRENCY_AS_PAYMENT_METHOD' });
  }
}

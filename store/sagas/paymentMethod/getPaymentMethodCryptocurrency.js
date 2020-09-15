import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getPaymentMethodCryptocurrencyByUserApi(userId, cryptocurrency) {
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

export default function* asyncGetPaymentMethodCryptocurrencyApi(action) {
  console.log(
    'action.payload.userId asyncGetPaymentMethodCryptocurrencyApi:',
    action.payload.userId
  );
  try {
    const response = yield call(
      getPaymentMethodCryptocurrencyByUserApi,
      action.payload.userId,
      action.payload.cryptocurrency
    );

    yield put({
      type: 'SUCCESS_GET_CRYPTO_CURRENCY_AS_PAYMENT_METHOD',
      payload: { data: response },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_GET_CRYPTO_CURRENCY_AS_PAYMENT_METHOD' });
  }
}

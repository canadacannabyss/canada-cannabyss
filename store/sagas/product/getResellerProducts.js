import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getResellerProductsApi(userId) {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/resellers/product/products/${userId}`,
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

export default function* asyncGetResellerProductsApi(action) {
  try {
    const response = yield call(getResellerProductsApi, action.payload.userId);
    console.log('product id:', response);

    yield put({
      type: 'SUCCESS_GET_RESELLER_PRODUCTS',
      payload: { data: response },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_GET_RESELLER_PRODUCTS' });
  }
}

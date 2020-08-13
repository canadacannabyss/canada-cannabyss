import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getRecommendedProductsApi() {
  console.log('getRecommendedProductsApi');
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/recommended/products`,
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

export default function* asyncGetProductApi() {
  try {
    const response = yield call(getRecommendedProductsApi);

    yield put({
      type: 'SUCCESS_GET_RECOMMENDED_PRODUCTS',
      payload: { data: response },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_GET_RECOMMENDED_PRODUCTS' });
  }
}

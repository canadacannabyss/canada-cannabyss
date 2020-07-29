import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getProductsCategoriesApi() {
  const res = await fetch(
    `${process.env.mainApiEndpoint}/products/get/categories`,
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

export default function* asyncGetProductsCategoriesApi() {
  try {
    const response = yield call(getProductsCategoriesApi);

    yield put({
      type: 'SUCCESS_GET_PRODUCTS_CATEGORIES',
      payload: { data: response },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_GET_PRODUCTS_CATEGORIES' });
  }
}

import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getMainProducts() {
  const res = await fetch(`${process.env.mainApiEndpoint}/home/main/products`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}

export default function* asyncGetMainProductsApi() {
  try {
    const response = yield call(getMainProducts);

    yield put({
      type: 'SUCCESS_GET_MAIN_PRODUCTS',
      payload: { data: response },
    });
  } catch (err) {
    yield put({ type: 'FAILURE_GET_MAIN_PRODUCTS' });
  }
}

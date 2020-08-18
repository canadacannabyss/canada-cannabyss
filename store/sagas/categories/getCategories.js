import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getCategoriesApi(page, limit) {
  const res = await fetch(`${process.env.MAIN_API_ENDPOINT}/categories`, {
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

export default function* asyncGetCategoriesApi(action) {
  try {
    const response = yield call(getCategoriesApi);

    yield put({ type: 'SUCCESS_GET_CATEGORIES', payload: { data: response } });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_GET_CATEGORIES' });
  }
}

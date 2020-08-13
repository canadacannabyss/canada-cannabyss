import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getMainCategoriesApi() {
  const response = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/home/main/category`,
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
  const data = await response.json();
  return data;
}

export default function* asyncMainCategoriesApi() {
  try {
    const response = yield call(getMainCategoriesApi);

    yield put({ type: 'SUCCESS_MAIN_CATEGORIES', payload: { data: response } });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_MAIN_CATEGORIES' });
  }
}

import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getNewestApi() {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/home/main/newest/products`,
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

export default function* asyncNewestApi() {
  try {
    const response = yield call(getNewestApi);

    yield put({
      type: 'SUCCESS_MAIN_NEWEST_PRODUCTS',
      payload: { data: response },
    });
  } catch (err) {
    console.log('news err:', err);
    yield put({ type: 'FAILURE_MAIN_NEWEST_PRODUCTS' });
  }
}

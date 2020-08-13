import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getNewsApi() {
  const res = await fetch(`${process.env.MAIN_API_ENDPOINT}/blog/home/news`, {
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

export default function* asyncNewsApi() {
  try {
    const response = yield call(getNewsApi);

    yield put({ type: 'SUCCESS_NEWS', payload: { data: response } });
  } catch (err) {
    console.log('news err:', err);
    yield put({ type: 'FAILURE_NEWS' });
  }
}

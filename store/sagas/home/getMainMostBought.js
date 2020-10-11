import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getMainMostBought() {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/home/main/most-bought`,
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

export default function* asyncGetMainMostBoughtApi() {
  try {
    const response = yield call(getMainMostBought);

    yield put({
      type: 'SUCCESS_MAIN_MOST_BOUGHT',
      payload: { data: response },
    });
  } catch (err) {
    yield put({ type: 'FAILURE_MAIN_MOST_BOUGHT' });
  }
}

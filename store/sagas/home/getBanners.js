import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getBannersApi() {
  const res = await fetch(`${process.env.mainApiEndpoint}/home/main/banners`, {
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

export default function* asyncGetBundlesApi() {
  try {
    const response = yield call(getBannersApi);

    yield put({
      type: 'SUCCESS_GET_BANNERS',
      payload: { data: response },
    });
  } catch (err) {
    yield put({ type: 'FAILURE_GET_BANNERS' });
  }
}

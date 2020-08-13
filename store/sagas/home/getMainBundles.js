import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getMainBundlesApi() {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/home/main/bundles`,
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

export default function* asyncGeBundlesApi() {
  try {
    const response = yield call(getMainBundlesApi);

    yield put({
      type: 'SUCCESS_GET_MAIN_BUNDLES',
      payload: { data: response },
    });
  } catch (err) {
    yield put({ type: 'FAILURE_GET_MAIN_BUNDLES' });
  }
}

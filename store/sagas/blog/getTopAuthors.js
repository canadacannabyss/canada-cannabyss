import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getTopAuthorsApi() {
  const response = await fetch(
    `${process.env.USER_API_ENDPOINT}/users/blog/get/top-authors`,
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

export default function* asyncTopAuthorsApi() {
  try {
    const response = yield call(getTopAuthorsApi);

    yield put({ type: 'SUCCESS_TOP_AUTHORS', payload: { data: response } });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_TOP_AUTHORS' });
  }
}

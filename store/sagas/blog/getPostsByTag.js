import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getPostsByTagApi(tag) {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/blog/get/tag/${tag}`,
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

export default function* asyncPostsByTagApi(action) {
  try {
    const response = yield call(getPostsByTagApi, action.payload.tag);

    yield put({ type: 'SUCCESS_POSTS_BY_TAG', payload: { data: response } });
  } catch (err) {
    yield put({ type: 'FAILURE_POSTS_BY_TAG' });
  }
}

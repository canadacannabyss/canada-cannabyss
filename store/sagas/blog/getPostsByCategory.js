import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getPostsByCategoryApi(category) {
  const res = await fetch(
    `${process.env.mainApiEndpoint}/blog/get/category/${category}`,
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

export default function* asyncPostsByCategoryApi(action) {
  try {
    const response = yield call(getPostsByCategoryApi, action.payload.category);

    yield put({
      type: 'SUCCESS_POSTS_BY_CATEGORY',
      payload: { data: response },
    });
  } catch (err) {
    yield put({ type: 'FAILURE_POSTS_BY_CATEGORY' });
  }
}

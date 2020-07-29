import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getRecentCategoriesApi(number) {
  const res = await fetch(
    `${process.env.mainApiEndpoint}/blog/get/categories/newest/${number}`,
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

export default function* asyncGetRecentCategoriesApi(action) {
  try {
    const response = yield call(getRecentCategoriesApi, action.payload.number);

    yield put({
      type: 'SUCCESS_RECENT_CATEGORIES',
      payload: { data: response },
    });
  } catch (err) {
    yield put({ type: 'FAILURE_RECENT_CATEGORIES' });
  }
}

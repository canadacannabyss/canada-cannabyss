import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getSearchItemApi(query) {
  const res = await fetch(
    `${process.env.mainApiEndpoint}/search?query=${query}`,
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

export default function* asyncGetSearchItemApi(action) {
  try {
    const response = yield call(getSearchItemApi, action.payload.query);

    yield put({ type: 'SUCCESS_SEARCH_ITEM', payload: { data: response } });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_SEARCH_ITEM' });
  }
}

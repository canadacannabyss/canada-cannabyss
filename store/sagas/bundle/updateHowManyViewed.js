import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function updateHowManyViewedApi(slug) {
  const response = fetch(
    `${process.env.mainApiEndpoint}/products/update/how-many-viewed`,
    {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        slug,
      }),
    }
  );
  const data = response.json();
  return data;
}

export default function* asyncUpdateHowManyReadApi(action) {
  try {
    yield call(updateHowManyViewedApi, action.payload.slug);

    yield put({ type: 'SUCCESS_UPDATE_HOW_MANY_VIEWED_PRODUCT' });
  } catch (err) {
    yield put({ type: 'FAILURE_UPDATE_HOW_MANY_VIEWED_PRODUCT' });
  }
}

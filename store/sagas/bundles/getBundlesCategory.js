import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getBundlesCategory(category) {
  const res = await fetch(
    `${process.env.mainApiEndpoint}/bundles/get/bundles/category/${category}`,
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

export default function* asyncGetBundlesCategoryApi(action) {
  try {
    const response = yield call(getBundlesCategory, action.payload.category);

    yield put({
      type: 'SUCCESS_GET_BUNDLES_CATEGORY',
      payload: { data: response },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_GET_BUNDLES_CATEGORY' });
  }
}

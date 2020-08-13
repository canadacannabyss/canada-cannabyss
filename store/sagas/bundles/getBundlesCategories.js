import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getBundlesApiCategories() {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/bundles/get/categories`,
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

export default function* asyncGetBundlesCategoriesApi() {
  try {
    const response = yield call(getBundlesApiCategories);

    yield put({
      type: 'SUCCESS_GET_BUNDLES_CATEGORIES',
      payload: { data: response },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_GET_BUNDLES_CATEGORIES' });
  }
}

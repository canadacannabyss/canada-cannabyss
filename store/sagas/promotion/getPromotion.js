import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getPromotionApi(slug) {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/promotions/get/slug/${slug}`,
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

export default function* asyncGetPromotionApi(action) {
  try {
    const response = yield call(getPromotionApi, action.payload.slug);

    yield put({ type: 'SUCCESS_GET_PROMOTION', payload: { data: response } });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_GET_PROMOTION' });
  }
}

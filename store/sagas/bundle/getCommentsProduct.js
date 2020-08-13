import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getCommentsProductApi(productId) {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/products/get/comments/${productId}`,
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
  console.log('data:', data);
  return data;
}

export default function* asyncGetCommentsProductApi(action) {
  try {
    const response = yield call(
      getCommentsProductApi,
      action.payload.productId
    );

    console.log('res:', response);

    yield put({
      type: 'SUCCESS_GET_ALL_COMMENTS_PRODUCT',
      payload: { data: response },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_GET_ALL_COMMENTS_PRODUCT' });
  }
}

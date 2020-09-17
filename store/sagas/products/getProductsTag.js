import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getProductsTag(tag, page, limit) {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/products/get/products/tag/${tag}?page=${page}&limit=${limit}`,
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

export default function* asyncGetProductsTagApi(action) {
  try {
    const response = yield call(
      getProductsTag,
      action.payload.tag,
      action.payload.page,
      action.payload.limit
    );

    yield put({
      type: 'SUCCESS_GET_PRODUCTS_TAG',
      payload: { data: response },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_GET_PRODUCTS_TAG' });
  }
}

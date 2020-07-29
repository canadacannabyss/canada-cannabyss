import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getProductsCategory(category) {
  const res = await fetch(
    `${process.env.mainApiEndpoint}/products/get/products/category/${category}`,
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

export default function* asyncGetProductsCategoryApi(action) {
  try {
    console.log('action.payload.category:', action.payload.category);
    const response = yield call(getProductsCategory, action.payload.category);

    console.log('getProductsCategroy:', response);

    yield put({
      type: 'SUCCESS_GET_PRODUCTS_CATEGORY',
      payload: { data: response },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_GET_PRODUCTS_CATEGORY' });
  }
}

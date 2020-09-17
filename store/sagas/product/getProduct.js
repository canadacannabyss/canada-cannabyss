import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getProductApi(slug) {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/products/get/product/${slug}`,
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

const getRelatedProductApi = async (category, slug) => {
  const dates = slug.split('/');
  const response = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/blog/get/category/newest/${category}/${dates[0]}/${dates[1]}/${dates[2]}/${dates[3]}`,
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
  const data = await response.json();
  return data;
};

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

async function getResellerProductsApi(userId) {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/resellers/product/products/${userId}`,
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

export default function* asyncGetProductApi(action) {
  try {
    const response = yield call(getProductApi, action.payload.slug);

    console.log('res product:', response);

    const responseComments = yield call(getCommentsProductApi, response._id);
    console.log('comments:', responseComments);

    console.log('response reseller:', response);
    const responseReseller = yield call(
      getResellerProductsApi,
      response.reseller._id
    );

    console.log('reseller prodyct response:', responseReseller);

    yield put({ type: 'SUCCESS_GET_PRODUCT', payload: { data: response } });
    yield put({
      type: 'SUCCESS_GET_ALL_COMMENTS_PRODUCT',
      payload: { data: responseComments },
    });
    yield put({
      type: 'SUCCESS_GET_RESELLER_PRODUCTS',
      payload: { data: responseReseller },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_GET_PRODUCT' });
  }
}

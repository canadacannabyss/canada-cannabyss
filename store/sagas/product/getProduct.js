import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getProductApi(slug) {
  const res = await fetch(
    `${process.env.mainApiEndpoint}/products/get/product/${slug}`,
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
    `${process.env.mainApiEndpoint}/blog/get/category/newest/${category}/${dates[0]}/${dates[1]}/${dates[2]}/${dates[3]}`,
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
    `${process.env.mainApiEndpoint}/products/get/comments/${productId}`,
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

export default function* asyncGetProductApi(action) {
  try {
    const response = yield call(getProductApi, action.payload.slug);
    console.log('product id:', response);

    const responseComments = yield call(getCommentsProductApi, response._id);
    console.log('comments:', responseComments);

    // const responseRelatedPosts = yield call(
    //   getRelatedProductApi,
    //   response.category,
    //   action.payload.slug
    // );

    yield put({ type: 'SUCCESS_GET_PRODUCT', payload: { data: response } });
    yield put({
      type: 'SUCCESS_GET_ALL_COMMENTS_PRODUCT',
      payload: { data: responseComments },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_GET_PRODUCT' });
  }
}

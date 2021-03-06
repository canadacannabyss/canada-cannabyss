import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getProductsApi(page, limit) {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/products?page=${page}&limit=${limit}`,
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

export default function* asyncGetProductsApi(action) {
  try {
    const response = yield call(
      getProductsApi,
      action.payload.page,
      action.payload.limit
    );
    // const responseRelatedPosts = yield call(
    //   getRelatedProductApi,
    //   response.category,
    //   action.payload.slug
    // );

    yield put({ type: 'SUCCESS_GET_PRODUCTS', payload: { data: response } });
    // yield put({
    //   type: 'SUCCESS_GET_RELATED_POSTS',
    //   payload: { data: responseRelatedPosts },
    // });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_GET_PRODUCTS' });
  }
}

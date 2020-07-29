import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getPostApi(slug) {
  const res = await fetch(
    `${process.env.mainApiEndpoint}/blog/get/slug/${slug}`,
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

const getRelatedBlogPostsApi = async (category, slug) => {
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

export default function* asyncGetPostApi(action) {
  try {
    const response = yield call(getPostApi, action.payload.slug);

    const responseRelatedPosts = yield call(
      getRelatedBlogPostsApi,
      response.category,
      action.payload.slug
    );

    yield put({ type: 'SUCCESS_POST', payload: { data: response } });
    yield put({
      type: 'SUCCESS_GET_RELATED_POSTS',
      payload: { data: responseRelatedPosts },
    });
  } catch (err) {
    yield put({ type: 'FAILURE_POST' });
  }
}

import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getBundleApi(slug) {
  const res = await fetch(
    `${process.env.mainApiEndpoint}/bundles/get/bundle/${slug}`,
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

const getRelatedBundleApi = async (category, slug) => {
  const dates = slug.split('/');
  const response = await fetch(
    `${process.env.mainApiEndpoint}/bundle/get/category/newest/${category}/${dates[0]}/${dates[1]}/${dates[2]}/${dates[3]}`,
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

async function getCommentsBundleApi(bundleId) {
  const res = await fetch(
    `${process.env.mainApiEndpoint}/bundles/get/comments/${bundleId}`,
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

export default function* asyncGetBundleApi(action) {
  try {
    const response = yield call(getBundleApi, action.payload.slug);
    console.log('product id:', response);

    const responseComments = yield call(getCommentsBundleApi, response._id);
    console.log('comments:', responseComments);

    // const responseRelatedPosts = yield call(
    //   getRelatedBundleApi,
    //   response.category,
    //   action.payload.slug
    // );

    yield put({ type: 'SUCCESS_GET_BUNDLE', payload: { data: response } });
    yield put({
      type: 'SUCCESS_GET_ALL_COMMENTS_BUNDLE',
      payload: { data: responseComments },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_GET_BUNDLE' });
  }
}

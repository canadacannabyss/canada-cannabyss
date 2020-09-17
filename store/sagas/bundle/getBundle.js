import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getBundleApi(slug) {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/bundles/get/bundle/${slug}`,
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
    `${process.env.MAIN_API_ENDPOINT}/bundle/get/category/newest/${category}/${dates[0]}/${dates[1]}/${dates[2]}/${dates[3]}`,
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
    `${process.env.MAIN_API_ENDPOINT}/bundles/get/comments/${bundleId}`,
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

async function getResellerBundlesApi(userId) {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/resellers/bundle/bundles/${userId}`,
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

export default function* asyncGetBundleApi(action) {
  try {
    const response = yield call(getBundleApi, action.payload.slug);
    console.log('res bundle:', response);

    const responseComments = yield call(getCommentsBundleApi, response._id);

    const responseReseller = yield call(
      getResellerBundlesApi,
      response.reseller._id
    );

    yield put({ type: 'SUCCESS_GET_BUNDLE', payload: { data: response } });
    yield put({
      type: 'SUCCESS_GET_ALL_COMMENTS_BUNDLE',
      payload: { data: responseComments },
    });
    yield put({
      type: 'SUCCESS_GET_RESELLER_BUNDLES',
      payload: { data: responseReseller },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_GET_BUNDLE' });
  }
}

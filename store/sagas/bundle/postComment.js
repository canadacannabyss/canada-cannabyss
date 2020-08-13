import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function postCommentBundleApi(userId, bundleId, comment, stars) {
  console.log('bundleId:', bundleId);
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/bundle/comment/post`,
    {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, bundleId, content: comment, stars }),
    }
  );
  const data = await res.json(res);
  return data;
}

export default function* asyncPostCommentBundleApi(action) {
  try {
    const response = yield call(
      postCommentBundleApi,
      action.payload.userId,
      action.payload.bundleId,
      action.payload.comment,
      action.payload.stars
    );

    yield put({
      type: 'SUCCESS_POST_COMMENT_BUNDLES',
      payload: { data: response },
    });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_POST_COMMENT_BUNDLES' });
  }
}

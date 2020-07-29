import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function postCommentApi(userId, productId, comment) {
  const res = await fetch(
    `${process.env.mainApiEndpoint}/customers/comment/post`,
    {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, productId, content: comment }),
    }
  );
  const data = await res.json(res);
  return data;
}

export default function* asyncPostCommentApi(action) {
  try {
    const response = yield call(
      postCommentApi,
      action.payload.userId,
      action.payload.productId,
      action.payload.comment
    );

    yield put({ type: 'SUCCESS_POST_COMMENT', payload: { data: response } });
  } catch (err) {
    console.log('err:', err);
    yield put({ type: 'FAILURE_POST_COMMENT' });
  }
}

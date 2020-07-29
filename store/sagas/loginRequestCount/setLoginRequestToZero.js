import { put } from 'redux-saga/effects';

export default function* asyncAddOneToCount() {
  try {
    yield put({
      type: 'SUCCESS_SET_LOGIN_REQUEST_TO_ZERO',
    });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_SET_LOGIN_REQUEST_TO_ZERO' });
  }
}

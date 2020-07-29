import { put } from 'redux-saga/effects';

export default function* asyncAddOneToCount() {
  try {
    yield put({
      type: 'SUCCESS_ADD_ONE_TO_COUNT',
    });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_ADD_ONE_TO_COUNT' });
  }
}

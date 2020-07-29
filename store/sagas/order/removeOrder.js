import { put } from 'redux-saga/effects';

export default function* asyncRemoveOrderApi() {
  try {
    localStorage.removeItem('orderId');

    yield put({
      type: 'SUCCESS_REMOVE_ORDER',
    });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_REMOVE_ORDER' });
  }
}

import { put } from 'redux-saga/effects';

export default function* asyncRemoveCartApi() {
  try {
    localStorage.removeItem('cartId');

    yield put({
      type: 'SUCCESS_RESET_CART',
    });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_RESET_CART' });
  }
}

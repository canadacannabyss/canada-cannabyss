import { call, put } from 'redux-saga/effects';

async function updateCartCompleted(cartId) {
  // const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.mainApiEndpoint}/customers/cart/update/completed`,
    {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartId }),
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncUpdateCompletedOrderApi(action) {
  try {
    console.log('update completed order');
    const response = yield call(updateCartCompleted, action.payload.cartId);

    yield put({
      type: 'SUCCESS_UPDATE_COMPLETED_CART',
      payload: { data: response },
    });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_UPDATE_COMPLETED_CART' });
  }
}

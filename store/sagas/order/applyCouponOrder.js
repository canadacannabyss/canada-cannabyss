import { call, put } from 'redux-saga/effects';

async function applyCouponOrder(orderId, couponName) {
  // const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.mainApiEndpoint}/customers/order/coupon/apply`,
    {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderId, couponName }),
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncApplyCouponOrderApi(action) {
  try {
    const response = yield call(
      applyCouponOrder,
      action.payload.orderId,
      action.payload.couponName
    );

    yield put({
      type: 'SUCCESS_APPLY_COUPON_ORDER',
      payload: { data: response },
    });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_APPLY_COUPON_ORDER' });
  }
}

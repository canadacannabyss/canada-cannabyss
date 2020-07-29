import { call, put } from 'redux-saga/effects';

// async function updateOrderCompleted(orderId) {
//   // const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
//   const res = await fetch(
//     `${process.env.mainApiEndpoint}/customers/order/update/completed`,
//     {
//       method: 'PUT',
//       mode: 'cors',
//       cache: 'no-cache',
//       credentials: 'same-origin',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ orderId }),
//     }
//   );
//   const data = await res.json();
//   return data;
// }

export default function* asyncUpdateShippingOrderApi(action) {
  try {
    // const response = yield call(updateOrderCompleted, action.payload.orderId);

    yield put({
      type: 'SUCCESS_UPDATE_SHIPPING_ORDER',
      payload: { data: action.payload.shipping },
    });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_UPDATE_COMPLETED_ORDER' });
  }
}

import { call, put } from 'redux-saga/effects';

async function updateOrderCompleted(orderId, imageObj) {
  // const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/order/update/completed`,
    {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderId, imageObj }),
    }
  );
  const data = await res.json();
  return data;
}

async function sendFinishedOrder(orderId) {
  // const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/order/send/finished-order/start`,
    {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderId }),
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncUpdateCompletedOrderApi(action) {
  try {
    console.log('update completed order');
    const response = yield call(
      updateOrderCompleted,
      action.payload.orderId,
      action.payload.imageObj
    );

    const responseSendFinishedOrder = yield call(
      sendFinishedOrder,
      action.payload.orderId
    );

    yield put({
      type: 'SUCCESS_UPDATE_COMPLETED_ORDER',
      payload: { data: response },
    });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_UPDATE_COMPLETED_ORDER' });
  }
}

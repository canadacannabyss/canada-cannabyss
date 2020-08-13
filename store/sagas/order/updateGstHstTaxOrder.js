import { call, put } from 'redux-saga/effects';

async function updateGstHstTaxOrder(orderId) {
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/order/update/tax/gsthst`,
    {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearerToken,
      },
      body: JSON.stringify({ orderId }),
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncUpdateGstHstTaxOrder(action) {
  try {
    const response = yield call(updateGstHstTaxOrder, action.payload.orderId);
    console.log('total before tax updated:', response);
    yield put({
      type: 'SUCCESS_UPDATE_GST_HST_TAX_ORDER',
      payload: { data: response },
    });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_UPDATE_GST_HST_TAX_ORDER' });
  }
}

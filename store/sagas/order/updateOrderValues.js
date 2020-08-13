import { call, put } from 'redux-saga/effects';
import { updateBeforeTaxOrder } from '../../actions/order/order';

async function updateSubtotalOrder(orderId, subtotal) {
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/order/update/subtotal`,
    {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearerToken,
      },
      body: JSON.stringify({ orderId, subtotal }),
    }
  );
  const data = await res.json();
  return data;
}

async function updateShippingHandlingOrder(orderId) {
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/order/update/shipping/handling`,
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

async function updateTotalBeforeTaxOrder(orderId) {
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/order/update/total/before-tax`,
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

async function updatePstRstTaxOrder(orderId) {
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/order/update/tax/pstrst`,
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

async function updateTotalOrder(orderId) {
  const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/order/update/total`,
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

export default function* asyncUpdateOrderValues(action) {
  try {
    const responseSubtotal = yield call(
      updateSubtotalOrder,
      action.payload.orderId,
      action.payload.subtotal
    );

    const responseShippingHandling = yield call(
      updateShippingHandlingOrder,
      action.payload.orderId
    );

    const responseTotalBeforeTax = yield call(
      updateTotalBeforeTaxOrder,
      action.payload.orderId
    );

    const responseGstHstTax = yield call(
      updateGstHstTaxOrder,
      action.payload.orderId
    );

    const responsePstRstTax = yield call(
      updatePstRstTaxOrder,
      action.payload.orderId
    );

    const responseTotal = yield call(updateTotalOrder, action.payload.orderId);

    const orderFinalObj = {
      shipping: {
        shippingHandling: responseShippingHandling.shippingHandling,
        freeShippingApplied: responseShippingHandling.freeShippingApplied,
      },
      subtotal: responseSubtotal.subtotal,
      totalBeforeTax: responseTotalBeforeTax.totalBeforeTax,
      gstHst: responseGstHstTax.gstHst,
      pstRst: responsePstRstTax.pstRst,
      total: responseTotal.total,
    };

    yield put({
      type: 'SUCCESS_UPDATE_ORDER_VALUES',
      payload: { data: orderFinalObj },
    });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_UPDATE_ORDER_VALUES' });
  }
}

import { call, put } from 'redux-saga/effects';

async function getTotalInCryptocurrency(totalInFiat, cryptocurrencySymbol) {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/cryptocurrencies/get/total/cryptocurrency`,
    {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ totalInFiat, cryptocurrencySymbol }),
    }
  );
  const data = await res.json();
  return data;
}

async function updateOrderTotalInCryptocurrency(
  orderId,
  totalInCryptocurrency
) {
  // const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/order/update/total/cryptocurrency`,
    {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderId, totalInCryptocurrency }),
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncUpdateTotalInCryptocurrencyOrderApi(action) {
  try {
    const responseTotalInCryptocurrency = yield call(
      getTotalInCryptocurrency,
      action.payload.totalInFiat,
      action.payload.cryptocurrencySymbol
    );

    const response = yield call(
      updateOrderTotalInCryptocurrency,
      action.payload.orderId,
      responseTotalInCryptocurrency.totalInCryptocurrency
    );

    yield put({
      type: 'SUCCESS_UPDATE_TOTAL_IN_CRYPTOCURRENCY_ORDER',
      payload: { data: response },
    });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_UPDATE_TOTAL_IN_CRYPTOCURRENCY_ORDER' });
  }
}

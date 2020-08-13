import { call, put } from 'redux-saga/effects';

async function takeAmountOfItemsPurchase(cartId) {
  // const bearerToken = `Bearer ${localStorage.getItem('user_token')}`;
  console.log('takeAmountOfItemsPurchase');
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/customers/cart/update/purchased`,
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

export default function* asyncTakeAmountOfItemsPurchaseApi(action) {
  try {
    console.log('update completed order');
    const response = yield call(
      takeAmountOfItemsPurchase,
      action.payload.cartId
    );

    yield put({
      type: 'SUCCESS_TAKE_AMOUNT_OF_ITEMS_PURCHASED',
    });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_TAKE_AMOUNT_OF_ITEMS_PURCHASED' });
  }
}

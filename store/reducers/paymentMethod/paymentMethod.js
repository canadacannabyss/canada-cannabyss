import update from 'immutability-helper';

const initialState = {
  data: {},
  loading: false,
  fetched: false,
  error: false,
};
export default function paymentMethod(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_GET_E_TRANSFER_AS_PAYMENT_METHOD':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_GET_E_TRANSFER_AS_PAYMENT_METHOD':
      return update(state, {
        data: { $set: action.payload.data },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_GET_E_TRANSFER_AS_PAYMENT_METHOD':
      return update(state, {
        fetched: { $set: true },
        error: { $set: true },
      });
    case 'REQUEST_CREATE_E_TRANSFER_AS_PAYMENT_METHOD':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_CREATE_E_TRANSFER_AS_PAYMENT_METHOD':
      return update(state, {
        data: { $set: action.payload.data },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_CREATE_E_TRANSFER_AS_PAYMENT_METHOD':
      return update(state, {
        fetched: { $set: true },
        error: { $set: true },
      });
    case 'REQUEST_SET_E_TRANSFER_AS_PAYMENT_METHOD':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_SET_E_TRANSFER_AS_PAYMENT_METHOD':
      return update(state, {
        data: { $set: action.payload.data },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_SET_E_TRANSFER_AS_PAYMENT_METHOD':
      return update(state, {
        fetched: { $set: true },
        error: { $set: true },
      });
    case 'REQUEST_GET_CRYPTO_CURRENCY_AS_PAYMENT_METHOD':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_GET_CRYPTO_CURRENCY_AS_PAYMENT_METHOD':
      return update(state, {
        data: { $set: action.payload.data },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_GET_CRYPTO_CURRENCY_AS_PAYMENT_METHOD':
      return update(state, {
        fetched: { $set: true },
        error: { $set: true },
      });
    case 'REQUEST_CREATE_CRYPTO_CURRENCY_AS_PAYMENT_METHOD':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_CREATE_CRYPTO_CURRENCY_AS_PAYMENT_METHOD':
      return update(state, {
        data: { $set: action.payload.data },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_CREATE_CRYPTO_CURRENCY_AS_PAYMENT_METHOD':
      return update(state, {
        fetched: { $set: true },
        error: { $set: true },
      });
    case 'REQUEST_SET_CRYPTO_CURRENCY_AS_PAYMENT_METHOD':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_SET_CRYPTO_CURRENCY_AS_PAYMENT_METHOD':
      return update(state, {
        data: { $set: action.payload.data },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_SET_CRYPTO_CURRENCY_AS_PAYMENT_METHOD':
      return update(state, {
        fetched: { $set: true },
        error: { $set: true },
      });
    default:
      return state;
  }
}

import update from 'immutability-helper';

const initialState = {
  data: [],
  loading: false,
  fetched: false,
  error: false,
};
export default function orders(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_GET_USER_ORDERS':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_GET_USER_ORDERS':
      return update(state, {
        data: { $set: action.payload.data },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_GET_USER_ORDERS':
      return update(state, {
        fetched: { $set: false },
        error: { $set: true },
      });
    case 'REQUEST_GET_ALL_ORDERS':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_GET_ALL_ORDERS':
      return update(state, {
        data: { $set: action.payload.data },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_GET_ALL_ORDERS':
      return update(state, {
        fetched: { $set: false },
        error: { $set: true },
      });
    case 'REQUEST_UPDATE_SHIPPING_STATUS':
      return update(state, {
        loading: { $set: false },
      });
    case 'SUCCESS_UPDATE_SHIPPING_STATUS':
      return {
        ...state,
        data: state.data.map((orderItem) =>
          orderItem._id === action.payload.data.orderId
            ? {
                ...orderItem,
                shipping: {
                  ...orderItem.shipping,
                  status: {
                    shipped: action.payload.data.shipped,
                    when: action.payload.data.when,
                    updated: action.payload.data.updated,
                  },
                },
              }
            : orderItem
        ),
      };
    case 'FAILURE_UPDATE_SHIPPING_STATUS':
      return update(state, {
        fetched: { $set: false },
        error: { $set: true },
      });
    case 'REQUEST_UPDATE_PAYMENT_STATUS':
      return update(state, {
        loading: { $set: false },
      });
    case 'SUCCESS_UPDATE_PAYMENT_STATUS':
      return {
        ...state,
        data: state.data.map((orderItem) =>
          orderItem._id === action.payload.data.orderId
            ? {
                ...orderItem,
                paid: action.payload.data.paid,
              }
            : orderItem
        ),
      };
    case 'FAILURE_UPDATE_PAYMEMT_STATUS':
      return update(state, {
        fetched: { $set: false },
        error: { $set: true },
      });
    default:
      return state;
  }
}

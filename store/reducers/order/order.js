import update from 'immutability-helper';

const initialState = {
  data: {},
  loading: false,
  fetched: false,
  error: false,
};
export default function order(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_GET_ORDER':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_GET_ORDER':
      return update(state, {
        data: { $set: action.payload.data },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_GET_ORDER':
      return update(state, {
        fetched: { $set: true },
        error: { $set: true },
      });
    case 'REQUEST_UPDATE_SUBTOTAL_ORDER':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_UPDATE_SUBTOTAL_ORDER':
      return update(state, {
        data: {
          subtotal: { $set: action.payload.data.subtotal },
          shipping: {
            shippingHandling: {
              $set: action.payload.data.shipping.shippingHandling,
            },
            freeShippingApplied: {
              $set: action.payload.data.shipping.freeShippingApplied,
            },
          },
          totalBeforeTax: { $set: action.payload.data.totalBeforeTax },
          gstHst: { $set: action.payload.data.gstHst },
          coupon: { $set: action.payload.data.coupon },
          total: { $set: action.payload.data.total },
        },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_UPDATE_SUBTOTAL_ORDER':
      return update(state, {
        fetched: { $set: false },
        error: { $set: true },
      });
    case 'REQUEST_UPDATE_ORDER_VALUES':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_UPDATE_ORDER_VALUES':
      return update(state, {
        data: {
          shipping: {
            shippingHandling: {
              $set: action.payload.data.shipping.shippingHandling,
            },
            freeShippingApplied: {
              $set: action.payload.data.shipping.freeShippingApplied,
            },
          },
          subtotal: { $set: action.payload.data.subtotal },
          totalBeforeTax: { $set: action.payload.data.totalBeforeTax },
          gstHst: { $set: action.payload.data.gstHst },
          pstRst: { $set: action.payload.data.pstRst },
          total: { $set: action.payload.data.total },
        },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_UPDATE_ORDER_VALUES':
      return update(state, {
        fetched: { $set: false },
        error: { $set: true },
      });
    case 'REQUEST_EMPTY_ORDER':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_EMPTY_ORDER':
      return {
        data: {},
        loading: false,
        fetched: true,
        error: false,
      };
    case 'FAILURE_EMPTY_ORDER':
      return {
        ...state,
        loading: false,
        fetched: true,
        error: true,
      };
    case 'REQUEST_UPDATE_PAYMENT_METHOD_ORDER':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_UPDATE_PAYMENT_METHOD_ORDER':
      return update(state, {
        data: {
          paymentMethod: { $set: action.payload.data },
        },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_UPDATE_PAYMENT_METHOD_ORDER':
      return update(state, {
        fetched: { $set: true },
        error: { $set: true },
      });
    case 'REQUEST_UPDATE_COMPLETED_ORDER':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_UPDATE_COMPLETED_ORDER':
      return update(state, {
        data: {
          completed: { $set: action.payload.data },
        },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_UPDATE_COMPLETED_ORDER':
      return update(state, {
        fetched: { $set: true },
        error: { $set: true },
      });
    case 'REQUEST_UPDATE_SHIPPING_ORDER':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_UPDATE_SHIPPING_ORDER':
      return update(state, {
        data: {
          shippingAddress: { $set: action.payload.data },
        },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_UPDATE_SHIPPING_ORDER':
      return update(state, {
        fetched: { $set: true },
        error: { $set: true },
      });
    case 'REQUEST_UPDATE_SHIPPING_HANDLING_ORDER':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_UPDATE_SHIPPING_HANDLING_ORDER':
      return update(state, {
        data: {
          shipping: {
            shippingHandling: { $set: action.payload.data.shippingHandling },
            freeShippingApplied: {
              $set: action.payload.data.freeShippingApplied,
            },
          },
        },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_UPDATE_SHIPPING_HANDLING_ORDER':
      return update(state, {
        fetched: { $set: true },
        error: { $set: true },
      });
    case 'REQUEST_RESET_SHIPPING_HANDLING_ORDER':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_RESET_SHIPPING_HANDLING_ORDER':
      return update(state, {
        data: {
          shipping: {
            shippingHandling: { $set: action.payload.data.shippingHandling },
            freeShippingApplied: {
              $set: action.payload.data.freeShippingApplied,
            },
          },
        },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_RESET_SHIPPING_HANDLING_ORDER':
      return update(state, {
        fetched: { $set: true },
        error: { $set: true },
      });
    case 'REQUEST_UPDATE_TOTAL_BEFORE_TAX_ORDER':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_UPDATE_TOTAL_BEFORE_TAX_ORDER':
      return update(state, {
        data: {
          totalBeforeTax: { $set: action.payload.data.totalBeforeTax },
        },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_UPDATE_TOTAL_BEFORE_TAX_ORDER':
      return update(state, {
        loading: { $set: false },
        fetched: { $set: false },
        error: { $set: true },
      });
    case 'REQUEST_UPDATE_GST_HST_TAX_ORDER':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_UPDATE_GST_HST_TAX_ORDER':
      return update(state, {
        data: {
          gstHst: { $set: action.payload.data.gstHst },
        },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_UPDATE_GST_HST_TAX_ORDER':
      return update(state, {
        loading: { $set: false },
        fetched: { $set: false },
        error: { $set: true },
      });
    case 'REQUEST_UPDATE_PST_RST_TAX_ORDER':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_UPDATE_PST_RST_TAX_ORDER':
      return update(state, {
        data: {
          pstRst: { $set: action.payload.data.pstRst },
        },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_UPDATE_PST_RST_TAX_ORDER':
      return update(state, {
        loading: { $set: false },
        fetched: { $set: false },
        error: { $set: true },
      });
    case 'REQUEST_UPDATE_TOTAL_ORDER':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_UPDATE_TOTAL_ORDER':
      return update(state, {
        data: {
          total: { $set: action.payload.data.total },
        },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_UPDATE_TOTAL_ORDER':
      return update(state, {
        loading: { $set: false },
        fetched: { $set: false },
        error: { $set: true },
      });
    case 'REQUEST_UPDATE_BILLING_ORDER':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_UPDATE_BILLING_ORDER':
      return update(state, {
        data: {
          billingAddress: { $set: action.payload.data },
        },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_UPDATE_BILLING_ORDER':
      return update(state, {
        fetched: { $set: true },
        error: { $set: true },
      });
    case 'REQUEST_REMOVE_ORDER':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_REMOVE_ORDER':
      return {
        ...state,
        data: {},
        loading: false,
        fetched: false,
        error: false,
      };
    case 'FAILURE_REMOVE_ORDER':
      return update(state, {
        fetched: { $set: false },
        error: { $set: true },
      });
    case 'REQUEST_APPLY_COUPON_ORDER':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_APPLY_COUPON_ORDER':
      return update(state, {
        data: {
          coupon: { $set: action.payload.data.coupon },
        },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_APPLY_COUPON_ORDER':
      return update(state, {
        loading: { $set: false },
        fetched: { $set: false },
        error: { $set: true },
      });
    case 'REQUEST_UPDATE_TOTAL_IN_CRYPTOCURRENCY_ORDER':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_UPDATE_TOTAL_IN_CRYPTOCURRENCY_ORDER':
      return update(state, {
        data: {
          totalInCryptocurrency: {
            $set: action.payload.data.totalInCryptocurrency,
          },
        },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_UPDATE_TOTAL_IN_CRYPTOCURRENCY_ORDER':
      return update(state, {
        loading: { $set: false },
        fetched: { $set: false },
        error: { $set: true },
      });
    default:
      return state;
  }
}

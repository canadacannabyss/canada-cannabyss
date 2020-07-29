import update from 'immutability-helper';

const initialState = {
  data: {},
  loading: false,
  fetched: false,
  error: false,
};
export default function cart(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_GET_CART':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_GET_CART':
      return update(state, {
        data: { $set: action.payload.data },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_GET_CART':
      return update(state, {
        fetched: { $set: true },
        error: { $set: true },
      });
    case 'SUCCESS_ADD_ITEM_TO_CART':
      return update(state, {
        data: {
          items: { $set: action.payload.data },
        },
        error: { $set: false },
      });
    case 'FAILURE_ADD_ITEM_TO_CART':
      return update(state, {
        data: {
          items: [],
        },
        error: { $set: true },
      });
    case 'SUCCESS_REMOVE_ITEM_FROM_CART':
      return update(state, {
        data: {
          items: { $set: action.payload.data },
        },
        error: { $set: false },
      });
    case 'FAILURE_REMOVE_ITEM_FROM_CART':
      return update(state, {
        data: {
          items: [],
        },
        error: { $set: true },
      });
    case 'REQUEST_EMPTY_CART':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_EMPTY_CART':
      return {
        data: {},
        loading: false,
        fetched: true,
        error: false,
      };
    case 'FAILURE_EMPTY_CART':
      return {
        ...state,
        data: {},
        loading: false,
        fetched: true,
        error: true,
      };
    case 'REQUEST_UPDATE_COMPLETED_CART':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_UPDATE_COMPLETED_CART':
      return update(state, {
        data: {
          completed: { $set: true },
        },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_UPDATE_COMPLETED_CART':
      return {
        ...state,
        loading: false,
        fetched: true,
        error: true,
      };
    case 'REQUEST_TAKE_AMOUNT_OF_ITEMS_PURCHASED':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_TAKE_AMOUNT_OF_ITEMS_PURCHASED':
      return { ...state };
    case 'FAILURE_TAKE_AMOUNT_OF_ITEMS_PURCHASED':
      return {
        ...state,
        loading: false,
        fetched: true,
        error: true,
      };
    case 'REQUEST_RESET_CART':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_RESET_CART':
      return update(state, {
        data: { $set: {} },
        loading: { $set: false },
        fetched: { $set: false },
        error: { $set: false },
      });
    case 'FAILURE_RESET_CART':
      return {
        ...state,
        loading: false,
        fetched: true,
        error: true,
      };
    default:
      return state;
  }
}

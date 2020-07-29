import update from 'immutability-helper';

const initialState = {
  data: 0,
  loading: false,
  fetched: false,
  error: false,
};
export default function loginRequestCount(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_ADD_ONE_TO_COUNT':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_ADD_ONE_TO_COUNT':
      return update(state, {
        data: { $set: 1 },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_ADD_ONE_TO_COUNT':
      return update(state, {
        fetched: { $set: true },
        error: { $set: true },
      });
    case 'REQUEST_SET_LOGIN_REQUEST_TO_ZERO':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_SET_LOGIN_REQUEST_TO_ZERO':
      return update(state, {
        data: { $set: 0 },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_SET_LOGIN_REQUEST_TO_ZERO':
      return update(state, {
        fetched: { $set: true },
        error: { $set: true },
      });
    default:
      return state;
  }
}

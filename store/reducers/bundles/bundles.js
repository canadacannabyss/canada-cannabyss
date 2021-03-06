import update from 'immutability-helper';

const initialState = {
  data: [],
  loading: false,
  fetched: false,
  error: false,
};
export default function bundles(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_GET_BUNDLES':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_GET_BUNDLES':
      return update(state, {
        data: { $set: action.payload.data },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_GET_BUNDLES':
      return update(state, {
        fetched: { $set: true },
        error: { $set: true },
      });
    case 'REQUEST_UPDATE_HOW_MANY_VIEWED_BUNDLE':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_UPDATE_HOW_MANY_VIEWED_BUNDLE':
      return update(state, {
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_UPDATE_HOW_MANY_VIEWED_BUNDLE':
      return update(state, {
        fetched: { $set: true },
        error: { $set: true },
      });
    case 'REQUEST_GET_BUNDLES_CATEGORY':
      return update(state, {
        loading: { $set: true },
      });
    case 'SUCCESS_GET_BUNDLES_CATEGORY':
      return update(state, {
        data: { $set: action.payload.data },
        loading: { $set: false },
        fetched: { $set: true },
        error: { $set: false },
      });
    case 'FAILURE_GET_BUNDLES_CATEGORY':
      return update(state, {
        fetched: { $set: true },
        error: { $set: true },
      });
    default:
      return state;
  }
}

import update from 'immutability-helper';

const initialState = {
  bundle: {
    data: {},
    loading: false,
    fetched: false,
    error: false,
  },
  resellerBundles: {
    data: [],
    loading: false,
    fetched: false,
    error: false,
  },
  relatedBundles: {
    data: [],
    loading: false,
    fetched: false,
    error: false,
  },
  comments: {
    data: [],
    loading: false,
    fetched: false,
    error: false,
    isSubmitted: false,
  },
};
export default function bundle(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_GET_BUNDLE':
      return update(state, {
        bundle: {
          loading: { $set: true },
        },
      });
    case 'SUCCESS_GET_BUNDLE':
      return update(state, {
        bundle: {
          data: { $set: action.payload.data },
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
        },
      });
    case 'FAILURE_GET_BUNDLE':
      return update(state, {
        bundle: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    case 'REQUEST_UPDATE_HOW_MANY_VIEWED_BUNDLE':
      return update(state, {
        bundle: {
          loading: { $set: true },
        },
      });
    case 'SUCCESS_UPDATE_HOW_MANY_VIEWED_BUNDLE':
      return update(state, {
        bundle: {
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
        },
      });
    case 'FAILURE_UPDATE_HOW_MANY_VIEWED_BUNDLE':
      return update(state, {
        bundle: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    case 'SUCCESS_GET_RELATED_BUNDLES':
      return update(state, {
        relatedBundles: {
          data: { $set: action.payload.data },
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
        },
      });
    case 'FAILURE_GET_RELATED_BUNDLES':
      return update(state, {
        relatedBundles: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    case 'REQUEST_GET_ALL_COMMENTS_BUNDLE':
      return update(state, {
        comments: {
          loading: { $set: true },
        },
      });
    case 'SUCCESS_GET_ALL_COMMENTS_BUNDLE':
      return update(state, {
        comments: {
          data: { $set: action.payload.data },
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
        },
      });
    case 'FAILURE_GET_ALL_COMMENTS_BUNDLE':
      return update(state, {
        comments: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    case 'REQUEST_POST_COMMENT_BUNDLES':
      return update(state, {
        comments: {
          // loading: { $set: true },
          isSubmitted: { $set: false },
        },
      });
    case 'SUCCESS_POST_COMMENT_BUNDLES':
      return update(state, {
        comments: {
          data: { $set: action.payload.data },
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
          isSubmitted: { $set: true },
        },
      });
    case 'FAILURE_POST_COMMENT_BUNDLES':
      return update(state, {
        comments: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    case 'REQUEST_GET_RESELLER_BUNDLES':
      return update(state, {
        resellerBundles: {
          loading: { $set: true },
        },
      });
    case 'SUCCESS_GET_RESELLER_BUNDLES':
      return update(state, {
        resellerBundles: {
          data: { $set: action.payload.data },
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
        },
      });
    case 'FAILURE_GET_RESELLER_BUNDLES':
      return update(state, {
        resellerBundles: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    default:
      return state;
  }
}

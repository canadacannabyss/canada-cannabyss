import update from 'immutability-helper';

const initialState = {
  product: {
    data: {},
    loading: false,
    fetched: false,
    error: false,
  },
  relatedPosts: {
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
export default function product(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_GET_PRODUCT':
      return update(state, {
        product: {
          loading: { $set: true },
        },
      });
    case 'SUCCESS_GET_PRODUCT':
      return update(state, {
        product: {
          data: { $set: action.payload.data },
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
        },
      });
    case 'FAILURE_GET_PRODUCT':
      return update(state, {
        product: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    case 'REQUEST_UPDATE_HOW_MANY_VIEWED_PRODUCT':
      return update(state, {
        product: {
          loading: { $set: true },
        },
      });
    case 'SUCCESS_UPDATE_HOW_MANY_VIEWED_PRODUCT':
      return update(state, {
        product: {
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
        },
      });
    case 'FAILURE_UPDATE_HOW_MANY_VIEWED_PRODUCT':
      return update(state, {
        product: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    case 'SUCCESS_GET_RELATED_PRODUCTS':
      return update(state, {
        relatedPosts: {
          data: { $set: action.payload.data },
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
        },
      });
    case 'FAILURE_GET_RELATED_PRODUCTS':
      return update(state, {
        relatedPosts: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    case 'REQUEST_GET_ALL_COMMENTS_PRODUCT':
      return update(state, {
        comments: {
          loading: { $set: true },
        },
      });
    case 'SUCCESS_GET_ALL_COMMENTS_PRODUCT':
      return update(state, {
        comments: {
          data: { $set: action.payload.data },
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
        },
      });
    case 'FAILURE_GET_ALL_COMMENTS_PRODUCT':
      return update(state, {
        comments: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    case 'REQUEST_POST_COMMENT':
      return update(state, {
        comments: {
          // loading: { $set: true },
          isSubmitted: { $set: false },
        },
      });
    case 'SUCCESS_POST_COMMENT':
      return update(state, {
        comments: {
          data: { $set: action.payload.data },
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
          isSubmitted: { $set: true },
        },
      });
    case 'FAILURE_POST_COMMENT':
      return update(state, {
        comments: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    default:
      return state;
  }
}

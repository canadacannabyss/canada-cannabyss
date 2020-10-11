import update from 'immutability-helper';

const initialState = {
  blogCategories: {
    data: [],
    loading: false,
    fetched: false,
    error: false,
  },
  mainProducts: {
    data: [],
    loading: false,
    fetched: false,
    error: false,
  },
  mainBundles: {
    data: [],
    loading: false,
    fetched: false,
    error: false,
  },
  newestProducts: {
    data: [],
    loading: false,
    fetched: false,
    error: false,
  },
  articles: {
    data: [],
    loading: false,
    fetched: false,
    error: false,
  },
  mainCategories: {
    data: [],
    loading: false,
    fetched: false,
    error: false,
  },
  banners: {
    data: [],
    loading: false,
    fetched: false,
    error: false,
  },
  mostBought: {
    data: [],
    loading: false,
    fetched: false,
    error: false,
  }
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_RECENT_CATEGORIES':
      return update(state, {
        blogCategories: {
          loading: { $set: true },
        },
      });
    case 'SUCCESS_RECENT_CATEGORIES':
      console.log('actions:', action.payload.data);
      return update(state, {
        blogCategories: {
          data: { $set: action.payload.data },
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
        },
      });
    case 'FAILURE_RECENT_CATEGORIES':
      return update(state, {
        blogCategories: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    case 'REQUEST_GET_MAIN_PRODUCTS':
      return update(state, {
        mainProducts: {
          loading: { $set: true },
        },
      });
    case 'SUCCESS_GET_MAIN_PRODUCTS':
      return update(state, {
        mainProducts: {
          data: { $set: action.payload.data },
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
        },
      });
    case 'FAILURE_GET_MAIN_PRODUCTS':
      return update(state, {
        mainProducts: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    case 'REQUEST_GET_MAIN_BUNDLES':
      return update(state, {
        mainBundles: {
          loading: { $set: true },
        },
      });
    case 'SUCCESS_GET_MAIN_BUNDLES':
      return update(state, {
        mainBundles: {
          data: { $set: action.payload.data },
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
        },
      });
    case 'FAILURE_GET_MAIN_BUNDLES':
      return update(state, {
        mainBundles: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    case 'REQUEST_MAIN_MOST_BOUGHT':
      return update(state, {
        mostBought: {
          loading: { $set: true },
        },
      });
    case 'SUCCESS_MAIN_MOST_BOUGHT':
      return update(state, {
        mostBought: {
          data: { $set: action.payload.data },
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
        },
      });
    case 'FAILURE_MAIN_MOST_BOUGHT':
      return update(state, {
        mostBought: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    case 'REQUEST_MAIN_NEWEST_PRODUCTS':
      return update(state, {
        newestProducts: {
          loading: { $set: true },
        },
      });
    case 'SUCCESS_MAIN_NEWEST_PRODUCTS':
      return update(state, {
        newestProducts: {
          data: { $set: action.payload.data },
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
        },
      });
    case 'FAILURE_MAIN_NEWEST_PRODUCTS':
      return update(state, {
        newestProducts: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    case 'REQUEST_MAIN_CATEGORIES':
      return update(state, {
        mainCategories: {
          loading: { $set: true },
        },
      });
    case 'SUCCESS_MAIN_CATEGORIES':
      return update(state, {
        mainCategories: {
          data: { $set: action.payload.data },
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
        },
      });
    case 'FAILURE_MAIN_CATEGORIES':
      return update(state, {
        mainCategories: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    case 'REQUEST_ARTICLES':
      return update(state, {
        articles: {
          loading: { $set: true },
        },
      });
    case 'SUCCESS_ARTICLES':
      return update(state, {
        articles: {
          data: { $set: action.payload.data },
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
        },
      });
    case 'FAILURE_ARTICLES':
      return update(state, {
        articles: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    case 'SUCCESS_ARTICLES_AUTHOR':
      return update(state, {
        articles: {
          data: {
            author: { $set: action.payload.data },
          },
        },
      });
    case 'REQUEST_TUTORIALS':
      return update(state, {
        tutorials: {
          loading: { $set: true },
        },
      });
    case 'SUCCESS_TUTORIALS':
      return update(state, {
        tutorials: {
          data: { $set: action.payload.data },
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
        },
      });
    case 'FAILURE_TUTORIALS':
      return update(state, {
        tutorials: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    case 'REQUEST_GET_BANNERS':
      return update(state, {
        banners: {
          loading: { $set: true },
        },
      });
    case 'SUCCESS_GET_BANNERS':
      return update(state, {
        banners: {
          data: { $set: action.payload.data },
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
        },
      });
    case 'FAILURE_GET_BANNERS':
      return update(state, {
        banners: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    default:
      return state;
  }
}

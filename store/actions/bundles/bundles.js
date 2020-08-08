/* eslint-disable import/prefer-default-export */
export function getBundles(page, limit) {
  return {
    type: 'REQUEST_GET_BUNDLES',
    payload: {
      page,
      limit,
    },
  };
}

export function getBundlesCategories() {
  return {
    type: 'REQUEST_GET_BUNDLES_CATEGORIES',
  };
}

export function updateHowManyViewed(slug) {
  return {
    type: 'REQUEST_UPDATE_HOW_MANY_VIEWED_BUNDLE',
    payload: {
      slug,
    },
  };
}

export function getBundlesCategory(category, page, limit) {
  return {
    type: 'REQUEST_GET_BUNDLES_CATEGORY',
    payload: {
      category: category,
      page,
      limit,
    },
  };
}

/* eslint-disable import/prefer-default-export */
export function getBundle(slug) {
  return {
    type: 'REQUEST_GET_BUNDLE',
    payload: {
      slug,
    },
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

export function getCommentsBundle(bundleId) {
  return {
    type: 'REQUEST_GET_ALL_COMMENTS_BUNDLE',
    payload: {
      bundleId,
    },
  };
}

export function postCommentBundle(userId, bundleId, comment, stars) {
  return {
    type: 'REQUEST_POST_COMMENT_BUNDLE',
    payload: {
      userId,
      bundleId,
      comment,
      stars,
    },
  };
}

export function getResellerBundles(userId) {
  return {
    type: 'REQUEST_GET_RESELLER_BUNDLES',
    payload: {
      userId,
    },
  };
}

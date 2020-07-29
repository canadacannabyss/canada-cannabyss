/* eslint-disable import/prefer-default-export */
export function getProduct(slug) {
  return {
    type: 'REQUEST_GET_PRODUCT',
    payload: {
      slug,
    },
  };
}

export function updateHowManyViewed(slug) {
  return {
    type: 'REQUEST_UPDATE_HOW_MANY_VIEWED_PRODUCT',
    payload: {
      slug,
    },
  };
}

export function getCommentsProduct(productId) {
  return {
    type: 'REQUEST_GET_ALL_COMMENTS_PRODUCT',
    payload: {
      productId,
    },
  };
}

export function postComment(userId, productId, comment) {
  return {
    type: 'REQUEST_POST_COMMENT',
    payload: {
      userId,
      productId,
      comment,
    },
  };
}

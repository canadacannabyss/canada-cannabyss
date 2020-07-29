/* eslint-disable import/prefer-default-export */
export function initialUploadCoverProcess(data) {
  return {
    type: 'INITIAL_UPLOAD_PROMOTION_MEDIA',
    payload: {
      data,
    },
  };
}

export function getPromotion(slug) {
  return {
    type: 'REQUEST_GET_PROMOTION',
    payload: {
      slug: slug,
    },
  };
}

/* eslint-disable import/prefer-default-export */
export function initialUploadCoverProcess(data) {
  return {
    type: 'INITIAL_UPLOAD_PROMOTION_MEDIA',
    payload: {
      data,
    },
  };
}

export function updateUploadCoverProcess(progress) {
  return {
    type: 'UPDATE_UPLOAD_PROMOTION_MEDIA_PROCESS',
    payload: {
      progress,
    },
  };
}

export function finishUploadCoverProcess(data) {
  console.log('data:', data);
  return {
    type: 'FINISH_UPLOAD_PROMOTION_MEDIA_PROCESS',
    payload: {
      data,
    },
  };
}

export function deleteUploadedCover() {
  return {
    type: 'DELETE_UPLOADED_PROMOTION_MEDIA',
  };
}

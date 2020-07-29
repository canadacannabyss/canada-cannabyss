/* eslint-disable import/prefer-default-export */
export function initialUploadCoverProcess(data) {
  return {
    type: 'INITIAL_UPLOAD_CATEGORY_MEDIA',
    payload: {
      data,
    },
  };
}

export function updateUploadCoverProcess(progress) {
  return {
    type: 'UPDATE_UPLOAD_CATEGORY_MEDIA_PROCESS',
    payload: {
      progress,
    },
  };
}

export function finishUploadCoverProcess(data) {
  console.log('data category:', data);
  return {
    type: 'FINISH_UPLOAD_CATEGORY_MEDIA_PROCESS',
    payload: {
      data,
    },
  };
}

export function deleteUploadedCover() {
  return {
    type: 'DELETE_UPLOADED_CATEGORY_MEDIA',
  };
}

export function updateExistingUploadedCover(data) {
  return {
    type: 'UPDATE_EXISTING_UPLOADED_CATEGORY_MEDIA',
    payload: {
      data,
    },
  };
}

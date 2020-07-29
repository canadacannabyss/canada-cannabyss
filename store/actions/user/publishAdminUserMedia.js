/* eslint-disable import/prefer-default-export */
export function initialUploadCoverProcess(data) {
  return {
    type: 'INITIAL_UPLOAD_ADMIN_USER_MEDIA',
    payload: {
      data,
    },
  };
}

export function updateUploadCoverProcess(progress) {
  return {
    type: 'UPDATE_UPLOAD_ADMIN_USER_MEDIA_PROCESS',
    payload: {
      progress,
    },
  };
}

export function finishUploadCoverProcess(data) {
  console.log('data:', data);
  return {
    type: 'FINISH_UPLOAD_ADMIN_USER_MEDIA_PROCESS',
    payload: {
      data,
    },
  };
}

export function deleteUploadedCover() {
  return {
    type: 'DELETE_UPLOADED_ADMIN_USER_MEDIA',
  };
}

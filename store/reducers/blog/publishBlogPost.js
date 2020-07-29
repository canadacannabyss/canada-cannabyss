import update from 'immutability-helper';

const initialState = {
  data: {},
};

export default function publishBlogPostCover(state = initialState, action) {
  switch (action.type) {
    case 'INITIAL_UPLOAD_COVER':
      console.log('initial data:', action.payload);
      return {
        ...state,
        data: action.payload.data,
      };
    case 'UPDATE_UPLOAD_COVER_PROCESS':
      return update(state, {
        data: {
          progress: { $set: action.payload.progress },
        },
      });
    case 'FINISH_UPLOAD_COVER_PROCESS':
      console.log('finish data:', action.payload);
      return update(state, {
        data: {
          [action.payload.data.uploadedProductMediaArrayIndex]: {
            id: { $set: action.payload.data.id },
            uploaded: { $set: action.payload.data.uploaded },
            url: { $set: action.payload.data.url },
          },
        },
      });
    case 'DELETE_UPLOADED_COVER':
      return {
        ...state,
        data: {},
      };
    case 'INITIAL_UPLOAD_PROMOTION_MEDIA':
      console.log('initial data:', action.payload);
      return {
        ...state,
        data: action.payload.data,
      };
    case 'UPDATE_UPLOAD_PROMOTION_MEDIA_PROCESS':
      return update(state, {
        data: {
          progress: { $set: action.payload.progress },
        },
      });
    case 'FINISH_UPLOAD_PROMOTION_MEDIA_PROCESS':
      console.log('finish data:', action.payload);
      return update(state, {
        data: {
          id: { $set: action.payload.data.id },
          uploaded: { $set: action.payload.data.uploaded },
          url: { $set: action.payload.data.url },
        },
      });
    case 'DELETE_UPLOADED_PROMOTION_MEDIA':
      return {
        ...state,
        data: {},
      };
    case 'INITIAL_UPLOAD_CATEGORY_MEDIA':
      console.log('initial data:', action.payload);
      return {
        ...state,
        data: action.payload.data,
      };
    case 'UPDATE_UPLOAD_CATEGORY_MEDIA_PROCESS':
      return update(state, {
        data: {
          progress: { $set: action.payload.progress },
        },
      });
    case 'FINISH_UPLOAD_CATEGORY_MEDIA_PROCESS':
      console.log('finish data:', action.payload);
      return update(state, {
        data: {
          id: { $set: action.payload.data.id },
          uploaded: { $set: action.payload.data.uploaded },
          url: { $set: action.payload.data.url },
        },
      });
    case 'DELETE_UPLOADED_CATEGORY_MEDIA':
      return {
        ...state,
        data: {},
      };
    case 'INITIAL_UPLOAD_CATEGORY_MEDIA':
      console.log('initial data:', action.payload);
      return {
        ...state,
        data: action.payload.data,
      };
    case 'UPDATE_EXISTING_UPLOADED_CATEGORY_MEDIA':
      return {
        ...state,
        data: action.payload.data,
      };
    case 'UPDATE_UPLOAD_ADMIN_USER_MEDIA_PROCESS':
      return update(state, {
        data: {
          progress: { $set: action.payload.progress },
        },
      });
    case 'FINISH_UPLOAD_ADMIN_USER_MEDIA_PROCESS':
      console.log('finish data:', action.payload);
      return update(state, {
        data: {
          id: { $set: action.payload.data.id },
          uploaded: { $set: action.payload.data.uploaded },
          url: { $set: action.payload.data.url },
        },
      });
    case 'DELETE_UPLOADED_ADMIN_USER_MEDIA':
      return {
        ...state,
        data: {},
      };
    default:
      return state;
  }
}

import update from 'immutability-helper';

const initialState = {
  isMobile: false,
  dimensions: {
    width: 0,
    height: 0
  }
};

export default function navbar(state = initialState, action) {
  switch (action.type) {
    case 'SET_IS_MOBILE':
      return update(state, {
        isMobile: { $set: action.payload.isMobile }
      });
    case 'GET_DIMENSIONS':
      return update(state, {
        dimensions: { $set: action.payload.dimensions }
      });
    default:
      return state;
  }
}

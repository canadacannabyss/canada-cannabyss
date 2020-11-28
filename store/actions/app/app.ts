export function setIsMobile(isMobile) {
  return {
    type: 'SET_IS_MOBILE',
    payload: {
      isMobile
    }
  };
}

export function getDimensions(dimensions) {
  return {
    type: 'GET_DIMENSIONS',
    payload: {
      dimensions
    }
  };
}
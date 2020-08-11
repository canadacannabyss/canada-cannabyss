/* eslint-disable import/prefer-default-export */
export function searchItem(query) {
  return {
    type: 'REQUEST_SEARCH_ITEM',
    payload: {
      query,
    },
  };
}

/* eslint-disable import/prefer-default-export */
export function searchItem(query, type) {
  return {
    type: 'REQUEST_SEARCH_ITEM',
    payload: {
      query,
      type,
    },
  };
}

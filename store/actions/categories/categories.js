/* eslint-disable import/prefer-default-export */
export function getCategories() {
  console.log('get categories');
  return {
    type: 'REQUEST_GET_CATEGORIES',
  };
}

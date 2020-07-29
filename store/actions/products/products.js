/* eslint-disable import/prefer-default-export */
export function getProducts() {
  return {
    type: 'REQUEST_GET_PRODUCTS',
  };
}

export function getProductsCategories() {
  return {
    type: 'REQUEST_GET_PRODUCTS_CATEGORIES',
  };
}

export function getProductsCategory(category) {
  return {
    type: 'REQUEST_GET_PRODUCTS_CATEGORY',
    payload: {
      category: category,
    },
  };
}

/* eslint-disable import/prefer-default-export */
export function getProducts(page, limit) {
  return {
    type: 'REQUEST_GET_PRODUCTS',
    payload: {
      page,
      limit,
    },
  };
}

export function getProductsCategories() {
  return {
    type: 'REQUEST_GET_PRODUCTS_CATEGORIES',
  };
}

export function getProductsCategory(category, page, limit) {
  return {
    type: 'REQUEST_GET_PRODUCTS_CATEGORY',
    payload: {
      category: category,
      page,
      limit,
    },
  };
}

export function getProductsTag(tag, page, limit) {
  return {
    type: 'REQUEST_GET_PRODUCTS_TAG',
    payload: {
      tag,
      page,
      limit,
    },
  };
}

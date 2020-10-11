/* eslint-disable import/prefer-default-export */
export function getArticles() {
  return {
    type: 'REQUEST_ARTICLES',
  };
}

export function getRecentCategories(number) {
  return {
    type: 'REQUEST_RECENT_CATEGORIES',
    payload: {
      number,
    },
  };
}

export function getMainProducts() {
  return {
    type: 'REQUEST_GET_MAIN_PRODUCTS',
  };
}

// export function getBundles() {
//   return {
//     type: 'REQUEST_GET_MAIN_BUNDLES',
//   };
// }

export function getMostBought() {
  return {
    type: 'REQUEST_MAIN_MOST_BOUGHT',
  };
}

export function getNewestProducts() {
  return {
    type: 'REQUEST_MAIN_NEWEST_PRODUCTS',
  };
}

export function getMainCategories() {
  return {
    type: 'REQUEST_MAIN_CATEGORIES',
  };
}

export function getTutorials() {
  return {
    type: 'REQUEST_TUTORIALS',
  };
}

export function getBanners() {
  return {
    type: 'REQUEST_GET_BANNERS',
  };
}

/* eslint-disable import/prefer-default-export */
export function loginUser(userInfo) {
  console.log('action user:', userInfo);
  return {
    type: 'REQUEST_LOGIN_USER',
    payload: {
      userInfo,
    },
  };
}

export function fetchLoginUser(userInfo) {
  return {
    type: 'REQUEST_FETCH_LOGIN_USER',
    payload: {
      userInfo,
    },
  };
}

export function fetchLoginAdminUser(userInfo) {
  console.log('userInfo:', userInfo);
  return {
    type: 'REQUEST_FETCH_LOGIN_ADMIN_USER',
    payload: {
      userInfo,
    },
  };
}

export function refreshUserData(id) {
  return {
    type: 'REQUEST_REFRESH_USER_DATA',
    payload: {
      id,
    },
  };
}

export function updateUserInfo(updateObj) {
  return {
    type: 'REQUEST_UPDATE_USER_INFO',
    payload: {
      updateObj,
    },
  };
}

export function logoutUser() {
  return {
    type: 'REQUEST_LOGOUT_USER',
  };
}

export function loginUserProvider(endpoint) {
  return {
    type: 'REQUEST_LOGIN_USER_PROVIDER',
    payload: {
      endpoint,
    },
  };
}

export function getPublicProfile(user) {
  return {
    type: 'REQUEST_GET_PUBLIC_PROFILE',
    payload: {
      user,
    },
  };
}

export function getPublicProfileActivities(activities) {
  return {
    type: 'REQUEST_GET_PUBLIC_PROFILE_ACTIVITIES',
    payload: {
      activities,
    },
  };
}

export function setFollowAuthor(userId, authorId) {
  return {
    type: 'REQUEST_SET_FOLLOW_AUTHOR',
    payload: {
      userId,
      authorId,
    },
  };
}

export function setUnfollowAuthor(userId, authorId) {
  return {
    type: 'REQUEST_SET_UNFOLLOW_AUTHOR',
    payload: {
      userId,
      authorId,
    },
  };
}

export function registerAdminUser(adminRegisterInfo) {
  return {
    type: 'REQUEST_REGISTER_ADMIN_USER',
    payload: {
      adminRegisterInfo,
    },
  };
}

export function loginAdminUser(username, password) {
  return {
    type: 'REQUEST_LOGIN_ADMIN_USER',
    payload: {
      username,
      password,
    },
  };
}

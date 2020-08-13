import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function registerAdminUserApi(adminRegisterInfo, profilePictureId) {
  const response = await fetch(
    `${process.env.USER_API_ENDPOINT}/admin/auth/register/admin`,
    {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        adminRegisterInfo,
        profilePictureId,
      }),
    }
  );
  const data = await response.json();
  return data;
}

async function loginUserApi(id) {
  const res = await fetch(`${process.env.USER_API_ENDPOINT}/auth/user/${id}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}

async function getLoginLocalStorageApi() {
  const bearerToken = `Bearer ${localStorage.getItem('accessToken')}`;
  const res = await fetch(`${process.env.USER_API_ENDPOINT}/auth/user/token`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: bearerToken,
    },
  });
  const data = await res.json();
  return data;
}

export default function* asyncRegisterAdminUserApi(action) {
  localStorage.removeItem('accessToken');
  try {
    if (localStorage.getItem('accessToken') === null) {
      const response = yield call(
        registerAdminUserApi,
        action.payload.adminRegisterInfo
      );
      console.log('register user admin:', response);
      if (!_.isEmpty(response)) {
        localStorage.setItem('accessToken', response.token);
        const resLocalStorage = yield call(getLoginLocalStorageApi);

        console.log('resLocalStorage:', resLocalStorage.authData.userinfo);
        yield put({
          type: 'SUCCESS_REGISTER_ADMIN_USER',
          payload: { data: resLocalStorage.authData.userinfo },
        });
      }
    } else {
    }
  } catch (err) {
    yield put({ type: 'FAILURE_REGISTER_ADMIN_USER' });
  }
}

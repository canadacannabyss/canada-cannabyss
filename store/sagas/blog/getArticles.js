import 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

async function getArticlesApi() {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/blog/home/articles`,
    {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await res.json();
  return data;
}

async function getArticleAuthorApi(authorId) {
  console.group('slug getPostAuthorApi:', authorId);
  const res = await fetch(
    `${process.env.USER_API_ENDPOINT}/users/blog/get/author/${authorId}`,
    {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncArticlesApi() {
  try {
    const response = yield call(getArticlesApi);

    yield put({ type: 'SUCCESS_ARTICLES', payload: { data: response } });
    // yield put({ type: 'SUCCESS_ARTICLES_AUTHOR', payload: { data: responseAuthor } });
  } catch (err) {
    yield put({ type: 'FAILURE_ARTICLES' });
  }
}

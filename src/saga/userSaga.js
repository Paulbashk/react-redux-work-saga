/* eslint-disable no-promise-executor-return */
import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';
import { addUsersAction } from '../store/usersReducer';
import { FETCH_USERS } from '../store/usersReducer';

const fetchUsersFromApi = () => axios.get('https://jsonplaceholder.typicode.com/users').then((response) => response.data);

function* fetchUserWorker() {
  const data = yield call(fetchUsersFromApi);
  yield put(addUsersAction(data));
}

function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}

export default userWatcher;

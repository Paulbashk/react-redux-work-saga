import { all } from 'redux-saga/effects';
import { countWatcher } from './countSaga';
import userWatcher from './userSaga';

function* rootWatcher() {
  yield all([
    countWatcher(),
    userWatcher()
  ]);
}

export default rootWatcher;

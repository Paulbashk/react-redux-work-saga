/* eslint-disable no-promise-executor-return */
/* eslint-disable import/prefer-default-export */
import { put, takeEvery } from 'redux-saga/effects';
import {
  ASYNC_DECREMENT, ASYNC_INCREMENT, decrementCountAction, incrementCountAction
} from '../store/countReducer';

/* Фейковая задержка */
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

function* incrementWorker() {
  yield delay(1000);
  yield put(incrementCountAction());
}

function* decrementWorker() {
  yield delay(1000);
  yield put(decrementCountAction());
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker);
  yield takeEvery(ASYNC_DECREMENT, decrementWorker);
}

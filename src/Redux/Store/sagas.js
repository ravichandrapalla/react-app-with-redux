// src/store/sagas.js
import { delay, put, takeEvery } from "redux-saga/effects";
import { INCREMENT_ASYNC, incrementAsync } from "./actions";

function* incrementAsyncWorker() {
  yield delay(1000); // Wait for 1 second
  yield put(incrementAsync());
}

export function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsyncWorker);
}

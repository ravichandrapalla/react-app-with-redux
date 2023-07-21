// src/store/index.js
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import counterReducer from "./reducers";
import { watchIncrementAsync } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(counterReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchIncrementAsync);

export default store;

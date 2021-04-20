import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../reducers';
import { composeWithDevTools } from "redux-devtools-extension";
import { rootSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export function configureStore() {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(rootSaga)
    return store
}

export const store = configureStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
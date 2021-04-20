import { put, call, takeEvery, all, fork } from 'redux-saga/effects';

import { getBooks } from '../services/Book.service';
import { getBooksSuccess, getBooksRequest, getBooksFailure } from '../actionCreators';
import { BookActionTypes } from '../actionTypes';
import { SetBookAction } from '../actions';
import { Books } from '../../@types';

function* onLoadBooks({ payload }: SetBookAction) {
    try {
        yield put(getBooksRequest());
        const data: Books = yield call(getBooks, payload.book);
        yield put(getBooksSuccess(data));
    } catch (error) {
        yield put(getBooksFailure(error))
    }
}

function* watchOnLoadBooks() {
    yield takeEvery(BookActionTypes.SET_BOOK, onLoadBooks)
}

export function* booksSaga() {
    yield all([fork(watchOnLoadBooks)])
}
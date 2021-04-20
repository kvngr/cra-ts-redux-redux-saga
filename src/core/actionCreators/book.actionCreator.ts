import { Books } from "../../@types";
import { GetBooksRequestAction, GetBooksFailureAction, ClearBooksAction, GetBooksSuccessAction, SetBookAction } from "../actions";
import { BookActionTypes } from '../actionTypes';

export function setBook(book: string): SetBookAction {
    return ({
        type: BookActionTypes.SET_BOOK,
        payload: { book }
    })
}

export function getBooksRequest(): GetBooksRequestAction {
    return ({
        type: BookActionTypes.GET_BOOKS_REQUEST
    })   
}

export function getBooksSuccess(books: Books): GetBooksSuccessAction {
    return ({
        type: BookActionTypes.GET_BOOKS_SUCCESS,
        payload: { books },
    })
}

export function getBooksFailure(error: Error | string | null): GetBooksFailureAction {
    return ({
        type: BookActionTypes.GET_BOOKS_FAILURE,
        payload: { error }
    })
}

export function clearBooks(): ClearBooksAction {
    return ({
        type: BookActionTypes.CLEAR_BOOKS,
    })
}
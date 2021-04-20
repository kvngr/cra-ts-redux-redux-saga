import { Books, ResponseStatus } from "../../@types";
import { BookActionTypes } from "../actionTypes";
import { BooksActions } from "../actions";

export type BooksState = {
    books?: Books;
    status: ResponseStatus;
    error: Error | string | null;
    isLoading: boolean;
}

const initialState: BooksState = {
    books: undefined,
    status: 'INIT',
    error: null,
    isLoading: false,
};

export function bookReducer(state: BooksState = initialState, action: BooksActions): BooksState {
    switch (action.type) {
        case BookActionTypes.GET_BOOKS_REQUEST:
            return {
                ...state,
                status: 'LOADING',
                isLoading: true
            }
        case BookActionTypes.GET_BOOKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                status: 'SUCCESS',
                books: action.payload.books,
                error: null
            }
        case BookActionTypes.GET_BOOKS_FAILURE:
            return {
                ...state,
                status: 'FAILED',
                isLoading: false,
                books: undefined,
                error: action.payload.error
            }
        case BookActionTypes.CLEAR_BOOKS:
            return initialState;
        default:
            return initialState;
    }
}
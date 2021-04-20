import { Books } from "../../@types";
import { BookActionTypes } from "../actionTypes";

export type SetBookAction = {
    type: BookActionTypes.SET_BOOK,
    payload: { book: string }
}

export type GetBooksRequestAction = {
    type: BookActionTypes.GET_BOOKS_REQUEST;
}

export type GetBooksSuccessAction = {
    type: BookActionTypes.GET_BOOKS_SUCCESS;
    payload: { books: Books };
}

export type GetBooksFailureAction = {
    type: BookActionTypes.GET_BOOKS_FAILURE;
    payload: { error: Error | string | null };
}

export type ClearBooksAction = {
    type: BookActionTypes.CLEAR_BOOKS
}

export type BooksActions =
| GetBooksRequestAction
| GetBooksSuccessAction
| SetBookAction
| GetBooksFailureAction
| ClearBooksAction;
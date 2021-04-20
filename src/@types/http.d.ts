export interface HttpResponse<T> extends Response {
    parsedBody?: T;
}

export interface QueryParams {
    params: { [key: string]: string | number }
}

export type ResponseStatus = 'INIT' | 'LOADING' | 'SUCCESS' | 'FAILED'
import { HttpResponse, QueryParams } from "../@types";

enum HttpMethod {
    POST = 'POST',
    GET = 'GET',
    PATCH = 'PATCH',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export function encodeQueryString({ params }: QueryParams) {
    const keys = Object.keys(params);
    return keys.length
        ? '?' + keys.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])).join('&')
        : '';
}

function setHeaders() {
    const token = window.localStorage.getItem('x-access-token');
    const headers: RequestInit['headers'] = {
        'Content-Type': 'application/json',
    };
    if (token) {
        headers['authorization'] = `Bearer ${JSON.parse(token)}`;
    }
    return headers;
}

async function http<R>(request: RequestInfo): Promise<HttpResponse<R>> {
    const abortController = new AbortController();
    try {
        const response: HttpResponse<R> = await fetch(request, { signal: abortController.signal });
        response.parsedBody = await response.json();
        return response;
    } catch (error) {
        throw new Error(error);
    } finally {
        abortController.abort();
    }
}

export async function get<R>(request: RequestInfo, queryParams: QueryParams = { params: {} }, config?: RequestInit ): Promise<HttpResponse<R>> {
    const query = encodeQueryString(queryParams);
    const headers = setHeaders();
    const init: RequestInit = {
        method: HttpMethod.GET,
        headers,
        ...config
    }
    return await http<R>(new Request(request + query, init))
}
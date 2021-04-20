import { Books } from '../../@types';
import * as fetch from '../../utils/fetch';

class BookService {
    static async getBooks(term: string) {
        const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${term}&orderBy=newest&maxResults=30`
        try {
            const response = await fetch.get<Books>(url);
            const books = response.parsedBody;
            return books
        } catch (error) {
            throw Error(error)
        }
    }
}

export async function getBooks(term: string) {
    return await BookService.getBooks(term);
}
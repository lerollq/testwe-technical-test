import { PaginatedResponse, PaginationParams, Book } from "types";
import { extractHeaderPagination, queryBuilder } from "utils";
import baseApi from "./base.api";

const booksApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getBooks: builder.query<PaginatedResponse<Book>, PaginationParams>({
			query: (params: Record<string, string>) => queryBuilder("/books", params),
			transformResponse: (response: Book[], meta) => ({
				response,
				pagination: extractHeaderPagination(meta?.response?.headers),
			}),
		}),
		getBook: builder.query<Book, number>({
			query: (id) => `/books/${id}`,
		}),
	}),
});

export default booksApi;

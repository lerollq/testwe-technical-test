import { extractHeaderPagination, extractId, queryBuilder } from "@/utils";
import { PaginatedResponse, PaginationParams, Book, WithId } from "@/types";

import baseApi from "./base.api";

const booksApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getBooks: builder.query<PaginatedResponse<WithId<Book>>, PaginationParams>({
			query: (params: Record<string, string>) => queryBuilder("/books", params),
			transformResponse: (response: Book[], meta) => ({
				response: response.map((book) => ({
					id: extractId(book.url),
					...book,
				})),
				pagination: extractHeaderPagination(meta?.response?.headers),
			}),
		}),
		getBook: builder.query<Book, string>({
			query: (id) => `/books/${id}`,
		}),
	}),
});

export default booksApi;

import { PaginatedResponse, PaginationParams, Character } from "@/types";
import { extractHeaderPagination, queryBuilder } from "@/utils";
import baseApi from "./base.api";

const charactersApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getCharacters: builder.query<PaginatedResponse<Character>, PaginationParams>({
			query: (params: Record<string, string>) => queryBuilder("/characters", params),
			transformResponse: (response: Character[], meta) => ({
				response,
				pagination: extractHeaderPagination(meta?.response?.headers),
			}),
		}),
		getCharacter: builder.query<Character, number>({
			query: (id) => `/characters/${id}`,
		}),
	}),
});

export default charactersApi;

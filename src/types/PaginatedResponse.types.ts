import { Pagination } from "./Pagination.types";

export interface PaginatedResponse<T> {
	response: T[];
	pagination: Pagination;
}

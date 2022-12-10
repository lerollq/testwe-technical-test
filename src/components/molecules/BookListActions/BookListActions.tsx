import { Space, Select } from "@/components/atoms";
import { DEFAULT_PAGE_SIZE_OPTIONS } from "@/config/constants";
import { Pagination } from "@/types";
import { Navigation } from "../Navigation";

export interface BookListActionsProps {
	currentPage: string;
	currentPageSize: string;
	setPage(page: string): void;
	setPageSize(page: string): void;
	pagination?: Pagination;
}

function BookListActions({ pagination, currentPage, currentPageSize, setPage, setPageSize }: BookListActionsProps) {
	return (
		<Space>
			<Navigation onChange={setPage} {...pagination} currentPage={currentPage} /> |
			<Select onChange={setPageSize} options={[...DEFAULT_PAGE_SIZE_OPTIONS]} value={currentPageSize} />
		</Space>
	);
}

export default BookListActions;

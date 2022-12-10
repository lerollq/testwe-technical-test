import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/config/constants";
import { useState } from "react";

function usePagination(defaultPage = DEFAULT_PAGE, defaultPageSize = DEFAULT_PAGE_SIZE) {
	const [page, setPage] = useState(defaultPage);
	const [size, setSize] = useState(defaultPageSize);

	const setPageSize = (value: string) => {
		setPage(defaultPage);
		setSize(value);
	};

	return {
		page,
		pageSize: size,
		setPage,
		setPageSize,
	};
}

export default usePagination;

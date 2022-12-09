import { Pagination } from "types";

function extractHeaderPagination(headers?: Headers): Pagination {
	const link = headers?.get("link");

	if (!link) return {};

	return link.split(",").reduce<Pagination>((acc, linkValue) => {
		const [uriReference, linkParam] = linkValue.split(";");
		const [pageNumber, pageKey] = [uriReference.match(/page=(\d*)/)?.[1], linkParam.match(/rel="(\w*)"/)?.[1]];
		return {
			...acc,
			...(pageNumber && pageKey && { [pageKey]: pageNumber }),
		};
	}, {});
}

export default extractHeaderPagination;

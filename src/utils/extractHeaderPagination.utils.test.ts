import { describe, it, expect } from "vitest";
import extractHeaderPagination from "./extractHeaderPagination.utils";

describe("utils / extractHeaderPagination", () => {
	it("should return empty object if no headers", () => {
		const result = extractHeaderPagination();
		expect(result).toEqual({});
	});

	it("should return empty object if no link property in headers", () => {
		const result = extractHeaderPagination(new Headers());
		expect(result).toEqual({});
	});

	it("should return extract every pagination properties from link property", () => {
		const headers = new Headers();
		headers.append(
			"link",
			'<https://www.anapioficeandfire.com/api/books?page=2&pageSize=10>; rel="next",\
    <https://www.anapioficeandfire.com/api/books?page=1&pageSize=10>; rel="first",\
    <https://www.anapioficeandfire.com/api/books?page=2&pageSize=10>; rel="last",\
    <https://www.anapioficeandfire.com/api/books?page=1&pageSize=10>; rel="prev"',
		);

		const result = extractHeaderPagination(headers);
		expect(result).toEqual({
			first: "1",
			last: "2",
			next: "2",
			prev: "1",
		});
	});
});

import { describe, it, expect } from "vitest";
import queryBuilder from "./queryBuilder.utils";

describe("utils / queryBuilder", () => {
	it("should return only path if no params", () => {
		expect(queryBuilder("/books", undefined)).toEqual("/books");
	});

	it("should return path concatenated with query params", () => {
		const params = {
			page: "12",
			pageSize: "10",
		};

		expect(queryBuilder("/books", params)).toEqual("/books?page=12&pageSize=10");
	});
});

import { RouteObject } from "react-router-dom";
import Book from "./Book";
import Root from "./Root";

const route: RouteObject = {
	path: "/",
	element: <Root />,
	children: [Book],
};

export default route;

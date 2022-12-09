import { RouteObject } from "react-router-dom";
import Root from "./Root";
import Characters from "./Characters";
import Books from "./Books";

const route: RouteObject = {
	path: "/",
	element: <Root />,
	children: [Books, Characters],
};

export default route;

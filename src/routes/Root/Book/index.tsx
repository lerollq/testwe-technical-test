import { RouteObject } from "react-router-dom";
import Book from "./Book";

const route: RouteObject = {
	path: ":id",
	element: <Book />,
};

export default route;

import { RouteObject } from "react-router-dom";
import NotFound from "./NotFound";

const route: RouteObject = {
	path: "*",
	element: <NotFound />,
};

export default route;

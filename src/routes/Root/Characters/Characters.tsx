import { Link, Outlet } from "react-router-dom";

function Characters() {
	return (
		<div>
			Characters
			<Link to="/books">Go to Books</Link>
			<Outlet />
		</div>
	);
}

export default Characters;

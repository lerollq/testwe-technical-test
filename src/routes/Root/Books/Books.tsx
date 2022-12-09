import { Link, Outlet } from "react-router-dom";

function Books() {
	return (
		<div>
			Books
			<Link to="/characters">Go to Characters</Link>
			<Outlet />
		</div>
	);
}

export default Books;

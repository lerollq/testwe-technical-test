import { Outlet } from "react-router-dom";

function Root() {
	return (
		<div>
			root
			<Outlet />
		</div>
	);
}

export default Root;

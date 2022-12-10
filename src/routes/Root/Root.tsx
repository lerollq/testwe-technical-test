import { Outlet } from "react-router-dom";
import { BookList } from "@/components/organisms";

function Books() {
	return (
		<div>
			<BookList />
			<Outlet />
		</div>
	);
}

export default Books;

import { Button, CoverImage, DateFormat } from "@/components/atoms";
import { useNavigate } from "react-router-dom";

interface BookRowProps {
	id: string;
	isbn: string;
	name: string;
	publisher: string;
	authors: string;
	pages: number;
	released: string;
}

function BookRow({ id, isbn, name, authors, publisher, released, pages }: BookRowProps) {
	const navigate = useNavigate();

	const handleSeeMore = () => navigate(id);

	return (
		<tr>
			<td>
				<CoverImage isbn={isbn} name={name} size='S' />
			</td>
			<td>{name}</td>
			<td>{authors}</td>
			<td>{publisher}</td>
			<td>
				<DateFormat value={released} year="2-digit" month="2-digit" day="2-digit" />
			</td>
			<td>{pages}</td>
			<td>
				<Button onClick={handleSeeMore}>See More</Button>
			</td>
		</tr>
	);
}

export default BookRow;

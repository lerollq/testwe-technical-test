import { CoverImage, JsonPreviewer, Space } from "@/components/atoms";
import { CharactersViewer } from "@/components/organisms";
import { Book } from "@/types";
import "./BookPreview.css";

interface BookPreviewProps {
	book: Book;
}

function BookPreview({ book }: BookPreviewProps) {
	const { characters, povCharacters, ...json } = book;

	return (
		<div className="book-preview">
			<Space vertical>
				<h1>{book.name}</h1>
				<div className="book-preview__main">
					<div className="book-preview__main__cover">
						<CoverImage isbn={book.isbn} name={book.name} size="L" />
					</div>

					<div className="book-preview__main__data">
						<JsonPreviewer json={json} />
					</div>

					<div className="book-preview__main__character">
						<CharactersViewer characters={characters} />
					</div>
				</div>
			</Space>
		</div>
	);
}

export default BookPreview;

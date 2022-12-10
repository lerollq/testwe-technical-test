import { booksApi } from "@/api";
import { Loader } from "@/components/atoms";
import { BookPreview } from "@/components/templates";
import { useParams } from "react-router-dom";

const { useGetBookQuery } = booksApi;

function Book() {
	const { id } = useParams();
	/* TODO: Remove non-null assertion operator, throw error is missing id,
		and catch error with custom errorBoundary element. */
	const { data, isLoading, isFetching } = useGetBookQuery(id!);

	return (
		<Loader isFetching={isFetching} isLoading={isLoading}>
			{data && <BookPreview book={data} />}
		</Loader>
	);
}

export default Book;

import { booksApi } from "@/api";
import { Loader } from "@/components/atoms";
import { BookListActions } from "@/components/molecules/BookListActions";
import { BookRow } from "@/components/molecules/BookRow";
import { usePagination } from "@/hooks";
import "./BookList.css";

const { useGetBooksQuery } = booksApi;

const COL_SPAN = 8;

function BookList() {
	const { page, pageSize, setPageSize, setPage } = usePagination();
	const { data, isLoading, isFetching } = useGetBooksQuery({ page, pageSize });

	const actions = (
		<BookListActions
			currentPage={page}
			currentPageSize={pageSize}
			setPage={setPage}
			setPageSize={setPageSize}
			pagination={data?.pagination}
		/>
	);

	return (
		<Loader isLoading={isLoading} isFetching={isFetching}>
			<table className="book-list">
				<thead>
					<tr>
						<td colSpan={COL_SPAN}>{actions}</td>
					</tr>
				</thead>
				<thead>
					<tr>
						<th />
						<th>Name</th>
						<th>Authors</th>
						<th>Publisher</th>
						<th>Released</th>
						<th>Pages</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{data?.response.map((response) => (
						<BookRow
							id={response.id}
							key={response.isbn}
							isbn={response.isbn}
							name={response.name}
							authors={response.authors.join(",")}
							publisher={response.publisher}
							released={response.released}
							pages={response.numberOfPages}
						/>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan={COL_SPAN}>{actions}</td>
					</tr>
				</tfoot>
			</table>
		</Loader>
	);
}

export default BookList;

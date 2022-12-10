import { charactersApi } from "@/api";
import { JsonPreviewer, Loader } from "@/components/atoms";

const { useGetCharacterQuery } = charactersApi;

interface CharacterProps {
	id: string;
}

function Character({ id }: CharacterProps) {
	const { data, isLoading, isFetching } = useGetCharacterQuery(id);

	return (
		<Loader isFetching={isFetching} isLoading={isLoading}>
			<div className="character">
				<JsonPreviewer json={data ?? {}} />
			</div>
		</Loader>
	);
}

export default Character;

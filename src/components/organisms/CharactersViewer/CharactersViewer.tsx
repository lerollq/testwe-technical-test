import { Space, Button } from "@/components/atoms";
import { Character } from "@/components/molecules";
import { extractId } from "@/utils";
import { useState, useEffect } from "react";

interface CharactersViewerProps {
	characters: string[];
}

function CharactersViewer({ characters }: CharactersViewerProps) {
	const [position, setPosition] = useState(0);

	useEffect(() => {
		setPosition(0);
	}, [characters.length]);

	const handleOnPrev = () => {
		if (position > 0) setPosition((position) => position - 1);
	};

	const handleOnNext = () => {
		if (position < characters.length) setPosition((position) => position + 1);
	};

	const currentCharacter = characters.at(position);

	if (!(currentCharacter || characters.length)) return null;

	return (
		<Space vertical>
			<Space>
				<Button onClick={handleOnPrev}>Prev</Button>
				<span>
					Character {position + 1}/{characters.length}
				</span>
				<Button onClick={handleOnNext}>Next</Button>
			</Space>
			{currentCharacter && <Character id={extractId(currentCharacter)} />}
		</Space>
	);
}

export default CharactersViewer;

import "./JsonPreviewer.css";

export interface JsonPreviewerProps {
	json: string | object;
}

function JsonPreviewer({ json }: JsonPreviewerProps) {
	const str = typeof json === "object" ? JSON.stringify(json, null, 2) : json;

	return <pre className="json-previewer">{str}</pre>;
}

export default JsonPreviewer;

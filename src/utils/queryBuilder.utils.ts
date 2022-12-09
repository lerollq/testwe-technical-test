function queryBuilder(path: string, params?: Record<string, string>) {
	if (!(params && Object.keys(params).length)) return path;

	const query = new URLSearchParams(params).toString();
	return `${path}?${query}`;
}

export default queryBuilder;

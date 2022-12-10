function extractId(url: string) {
	const { pathname } = new URL(url);
	const id = pathname.match(/(\d*)$/)?.[1] ?? "";
	return id;
}

export default extractId;

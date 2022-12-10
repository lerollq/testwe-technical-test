export interface DateFormatProps extends Intl.DateTimeFormatOptions {
	value: string;
}

function DateFormat({ value, ...options }: DateFormatProps) {
	const date = new Date().toLocaleString(navigator.language, options);

	return <>{date}</>;
}

export default DateFormat;

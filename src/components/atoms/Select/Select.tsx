import classnames from "classnames";

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
	onChange(value: string): void;
	options: string[];
}

function Select({ onChange, options, className, ...htmlProps }: SelectProps) {
	const classes = classnames("select", className);

	const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChange(e.currentTarget.value);
	};

	return (
		<select className={classes} onChange={handleOnChange} {...htmlProps}>
			{options.map((value) => (
				<option key={value} value={value}>
					{value}
				</option>
			))}
		</select>
	);
}

export default Select;

import classnames from "classnames";
import "./Button.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ className, children, ...htmlProps }: ButtonProps) {
	const classes = classnames("btn", className);

	return (
		<button className={classes} {...htmlProps}>
			{children}
		</button>
	);
}

export default Button;

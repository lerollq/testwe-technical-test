import { PropsWithChildren, Children } from "react";
import classNames from "classnames";
import "./Space.css";

export interface SpaceProps {
	vertical?: boolean;
}

function Space({ children, vertical }: PropsWithChildren<SpaceProps>) {
	const classes = classNames("space", {
		"space--vertical": vertical,
	});

	return (
		<div className={classes}>
			{Children.map(children, (child) => (
				<div className='space__item'>{child}</div>
			))}
		</div>
	);
}

export default Space;

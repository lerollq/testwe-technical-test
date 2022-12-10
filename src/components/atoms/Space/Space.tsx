import { PropsWithChildren, Children } from "react";
import "./Space.css";

function Space({ children }: PropsWithChildren) {
	return (
		<div className='space'>
			{Children.map(children, (child) => (
				<div className='space__item'>{child}</div>
			))}
		</div>
	);
}

export default Space;

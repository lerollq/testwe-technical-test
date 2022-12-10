import classnames from "classnames";
import "./CoverImage.css";

export type CoverImageSize = "S" | "M" | "L";

export interface CoverImageProps extends Omit<React.HTMLAttributes<HTMLImageElement>, "src" | "name"> {
	isbn: string;
	name: string;
	/**
	 * @default "M"
	 */
	size?: CoverImageSize;
}

function CoverImage({ isbn, name, size = "M", className, ...htmlProps }: CoverImageProps) {
	const classes = classnames("cover-img", `cover-img--${size.toLowerCase()}`, className);

	const src = `https://covers.openlibrary.org/b/isbn/${isbn.replace("-", "")}-${size}.jpg`;

	return <img src={src} className={classes} {...htmlProps} alt={name} />;
}

export default CoverImage;

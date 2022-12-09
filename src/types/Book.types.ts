export interface Book {
	/** The hypermedia URL of this resource */
	readonly url: string;
	/** The name of this book */
	readonly name: string;
	/** The International Standard Book Number (ISBN-13) that uniquely identifies this book. */
	readonly isbn: string;
	/** An array of names of the authors that wrote this book. */
	readonly authors: string[];
	/** The number of pages in this book. */
	readonly numberOfPages: number;
	/** The company that published this book. */
	readonly publisher: string;
	/** The country that this book was published in */
	readonly country: string;
	/** The type of media this book was released in. */
	readonly mediaType: string;
	/** The date (ISO 8601) when this book was released. */
	readonly released: string;
	/** An array of Character resource URLs that has been in this book. */
	readonly characters: string[];
	/** An array of Character resource URLs that has had a POV-chapter in this book. */
	readonly povCharacters: string[];
}

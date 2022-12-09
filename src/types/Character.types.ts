export interface Character {
	/** The hypermedia URL of this resource */
	readonly url: string;
	/** The name of this character */
	readonly name: string;
	/** The gender of this character. */
	readonly gender: string;
	/** The culture that this character belongs to. */
	readonly culture: string;
	/** Textual representation of when and where this character was born. */
	readonly born: string;
	/** Textual representation of when and where this character died. */
	readonly died: string;
	/** The titles that this character holds. */
	readonly titles: string[];
	/** The aliases that this character goes by. */
	readonly aliases: string[];
	/** The character resource URL of this character's father. */
	readonly father: string;
	/** The character resource URL of this character's mother. */
	readonly mother: string;
	/** An array of Character resource URLs that has had a POV-chapter in this book. */
	readonly spouse: string;
	/** An array of House resource URLs that this character is loyal to. */
	readonly allegiances: string[];
	/** An array of Book resource URLs that this character has been in. */
	readonly books: string[];
	/** An array of Book resource URLs that this character has had a POV-chapter in. */
	readonly povBooks: string[];
	/** An array of names of the seasons of Game of Thrones that this character has been in. */
	readonly tvSeries: string[];
	/** An array of actor names that has played this character in the TV show Game Of Thrones. */
	readonly playedBy: string[];
}

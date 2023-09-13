export interface Game {
	_id: string;
	name: string;
	price: number;
	images: Array<{
		_key: string;
		url: string;
	}>;
	isFeatured: boolean;
	isTrending: boolean;
	category: { name: string; slug: { current: string } };
	dimension: { name: string; slug: { current: string }; weightPerVessel: string };
	slug: { current: string };
	quantity: number;
	description: string;
	buyLink: string

}

export type GameSubset = Pick<
	Game,
	'_id' | 'price' | 'quantity' | 'images' | 'name'
> & { maxQuantity: number };

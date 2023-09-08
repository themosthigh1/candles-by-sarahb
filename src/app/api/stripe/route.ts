import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
	apiVersion: '2022-11-15',
});

import sanityClient from '@/libs/sanity';
import { Game, GameSubset } from '@/models/game';
import { createOrder, updateGameQuantity } from '@/libs/apis';

export async function POST(req: NextRequest, res: NextResponse) {
	const { cartItems, userEmail } = await req.json();
	const origin = req.headers.get('origin');

	const updatedItems: GameSubset[] =
		(await fetchAndCalculateItemPricesAndQuantity(cartItems)) as GameSubset[];

	try {
		const session = await stripe.checkout.sessions.create({
			line_items: updatedItems.map(item => ({
				quantity: item.quantity,
				adjustable_quantity: {
					enabled: true,
					maximum: item.maxQuantity,
					minimum: 1,
				},
				price_data: {
					currency: 'usd',
					product_data: {
						name: item.name,
						images: [item.images[0].url],
					},
					unit_amount: parseInt((item.price * 100).toString()),
				},
			})),
			payment_method_types: ['card'],
			billing_address_collection: 'required',
			mode: 'payment',
			success_url: `${origin}/?success=true`,
			phone_number_collection: { enabled: true },
		});

		await updateGameQuantity(updatedItems);

		await createOrder(updatedItems, userEmail);

		return NextResponse.json(session, {
			status: 200,
			statusText: 'payment successful',
		});
	} catch (error: any) {
		console.log('ERROR ', error);
		return new NextResponse(error, { status: 500 });
	}
}

async function fetchAndCalculateItemPricesAndQuantity(cartItems: Game[]) {
	const query = `*[_type == "game" && _id in $itemIds] {
        _id,
        name,
        price,
        quantity,
        images
    }`;

	try {
		// Fetch items from sanity based on game IDS
		const itemIds = cartItems.map(item => item._id);
		const sanityItems: GameSubset[] = await sanityClient.fetch({
			query,
			params: { itemIds },
		});

		const updatedItems: GameSubset[] = sanityItems.map(item => ({
			...item,
			maxQuantity: item.quantity,
		}));

		return updatedItems;
	} catch (error) {
		return new NextResponse(
			'Quantiy has been updated, please update your cart',
			{ status: 500 }
		);
	}
}

function checkQuantitiesAgainstSanity(
	cartItems: Game[],
	sanityItems: GameSubset[]
) {
	for (let i = 0; i < cartItems.length; i++) {
		const cartItem = cartItems[i];
		const sanityItem = sanityItems[i];

		if (cartItem.quantity <= sanityItem.quantity) {
			return false;
		}
	}

	return true;
}
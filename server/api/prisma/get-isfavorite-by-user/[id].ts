// import { PrismaClient } from '@prisma/client';
// import type { Products } from '../get-all-products';

// const prisma = new PrismaClient();

// export interface Favorites {
// 	id: number;
// 	userId: string;
// 	productId: number;
// 	created_at?: Date | null;
// 	product?: Products;
// }

// export default defineEventHandler(async (event: any) => {
// 	try {
// 				const userId = event.context.params.id;

// 		const favorites: Favorites[] = await prisma.favorites.findMany({
// 			where: {
// 				product: {
// 					Favorites: {
// 						some: {
// 							userId: userId,
// 						},
// 					},
// 				},
// 			},
// 			include: {
// 				product: true,
// 			},
// 		});

// 		console.log('Fetched favorites:', favorites);

// 		return favorites;
// 	} catch (error) {
// 		console.error('Error fetching favorites:', error);
// 		return {
// 			status: 500,
// 			body: JSON.stringify({ error: 'Internal Server Error' }),
// 		};
// 	}
// });

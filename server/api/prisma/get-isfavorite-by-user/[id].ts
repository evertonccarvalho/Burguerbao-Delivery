import { PrismaClient, type Favorites } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event: any) => {
	try {
		const userId = event.context.params.userId;

		const favorites: Favorites[] = await prisma.favorites.findMany({
			// where: { userId: userId },
			// include: {
			// 	product: {

			//   }
			// },
			where: {
				userId: userId,
			},
			// where: {
			//   id, some:{
			//     userId: userId
			//   }
			// }
		});

		console.log('Fetched favorites:', favorites);

		return favorites;
	} catch (error) {
		console.error('Error fetching favorites:', error);
		return {
			status: 500,
			body: JSON.stringify({ error: 'Internal Server Error' }),
		};
	}
});

import { PrismaClient, type Favorites } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event: any) => {
	try {
		const userId = event.context.params.id;

		const favorites: Favorites[] | null = await prisma.favorites.findMany({
			where: { userId: userId },
			orderBy: { id: 'desc' },
			include: {
				favoriteItem: {
					include: {
						product: true,
					},
				},
			},
		});

		console.log('Fetched favorites for user ID', userId, ':', favorites);

		return favorites;
	} catch (error) {
		console.error('Error fetching favorites:', error);
		return {
			status: 500,
			body: JSON.stringify({ error: 'Internal Server Error' }),
		};
	}
});

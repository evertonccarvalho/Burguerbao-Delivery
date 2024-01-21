import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	try {
		let favorites = await prisma.favorites.findMany({
			where: { userId: event.context.params.userId },
			orderBy: { id: 'desc' },
			include: {
				product: true,
			},
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

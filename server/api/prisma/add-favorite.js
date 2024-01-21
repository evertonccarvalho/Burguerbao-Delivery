import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event);
		console.log('Response body:', body);

		// Check if the required properties are present in the body
		if (!body || !body.userId || !body.productId) {
			return {
				status: 400,
				body: JSON.stringify({ error: 'Invalid request body' }),
			};
		}

		const { userId, productId } = body;

		// Verificar se o produto já está nos favoritos do usuário
		const existingFavorite = await prisma.favorites.findFirst({
			where: {
				userId,
				productId,
			},
		});

		// For delete
		if (existingFavorite) {
			await prisma.favorites.deleteMany({
				where: {
					userId: existingFavorite.userId,
					productId: existingFavorite.productId,
				},
			});
		} else {
			// Se não existir, adicionar o favorito
			const newFavorite = await prisma.favorites.create({
				data: {
					userId: body.userId,
					productId: body.productId,
				},
			});

			return newFavorite;
		}
	} catch (error) {
		console.error('Error toggling favorite:', error);
		return {
			status: 500,
			body: JSON.stringify({ error: 'Internal Server Error' }),
		};
	}
});

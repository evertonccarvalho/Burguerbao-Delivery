import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event);
		console.log('Request body:', body);

		// Check if the required properties are present in the body
		if (!body || !body.userId || !body.productId) {
			console.error('Invalid request body');
			return {
				status: 400,
				body: JSON.stringify({ error: 'Invalid request body' }),
			};
		}

		const { userId: userId, productId: id } = body;

		// Verificar se o produto já está nos favoritos do usuário
		const existingFavorite = await prisma.favorites.findFirst({
			where: {
				userId,
				id,
			},
		});

		// For delete
		if (existingFavorite) {
			console.log('Removing favorite:', existingFavorite);

			await prisma.$transaction([
				prisma.favoriteItem.deleteMany({
					where: {
						favoritesId: existingFavorite.id,
					},
				}),
				prisma.favorites.delete({
					where: {
						id: existingFavorite.id,
					},
				}),
			]);

			console.log('Favorite removed successfully');
			return {
				status: 200,
				body: JSON.stringify({ success: 'Favorite removed successfully' }),
			};
		} else {
			// Se não existir, adicionar o favorito

			console.log('Adding new favorite:', { userId, id });
			const favorite = await prisma.favorites.create({
				data: {
					userId: body.userId,
					id: body.productId,
				},
			});

			await prisma.favoriteItem.create({
				data: {
					favoritesId: favorite.id,
					productId: body.productId,
				},
			});

			console.log('Favorite added successfully');
			return {
				status: 201, // 201 Created status code for successful creation
				body: JSON.stringify({ success: 'Favorite added successfully' }),
			};
		}
	} catch (error) {
		console.error('Error toggling favorite:', error);
		return {
			status: 500,
			body: JSON.stringify({ error: 'Internal Server Error' }),
		};
	} finally {
		await prisma.$disconnect();
	}
});

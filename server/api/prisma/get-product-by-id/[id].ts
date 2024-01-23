import { PrismaClient, type Products } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event: any) => {
	try {
		const productId = Number(event.context.params.id);

		const product: Products | null = await prisma.products.findFirst({
			where: { id: productId },
		});

		return product;
	} catch (error) {
		console.error('Error fetching product:', error);
		return {
			status: 500,
			body: JSON.stringify({ error: 'Internal Server Error' }),
		};
	}
});

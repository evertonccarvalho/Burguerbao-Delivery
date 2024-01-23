import { PrismaClient, type Products } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event: any) => {
	try {
		const items: Products[] = await prisma.products.findMany({
			take: 5,
			where: {
				title: {
					contains: event.context.params.id,
					mode: 'insensitive',
				},
			},
		});

		return items;
	} catch (error) {
		console.error('Error fetching products:', error);
		return {
			status: 500,
			body: JSON.stringify({ error: 'Internal Server Error' }),
		};
	}
});

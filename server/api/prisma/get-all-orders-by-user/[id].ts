import { PrismaClient, type Orders } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event: any) => {
	try {
		const userId = event.context.params.userId;

		const orders: Orders[] = await prisma.orders.findMany({
			where: { userId: userId },
			orderBy: { id: 'desc' },
			include: {
				orderItem: {
					include: {
						product: true,
					},
				},
			},
		});

		return orders;
	} catch (error) {
		console.error('Error fetching orders:', error);
		return {
			status: 500,
			body: JSON.stringify({ error: 'Internal Server Error' }),
		};
	}
});

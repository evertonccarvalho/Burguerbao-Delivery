import { PrismaClient, type Addresses } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event: any) => {
	try {
		const userId = event.context.params.id;

		const address: Addresses | null = await prisma.addresses.findFirst({
			where: { userId: userId },
		});

		return address;
	} catch (error) {
		console.error('Error fetching address:', error);
		return {
			status: 500,
			body: JSON.stringify({ error: 'Internal Server Error' }),
		};
	}
});

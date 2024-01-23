import { PrismaClient, type Addresses } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event: any) => {
	try {
		const body = await readBody(event);

		const updatedAddress: Addresses | null = await prisma.addresses.update({
			where: { id: Number(event.context.params.id) },
			data: {
				name: body.name,
				address: body.address,
				zipcode: body.zipCode,
				city: body.city,
				country: body.country,
			},
		});

		return updatedAddress;
	} catch (error) {
		console.error('Error updating address:', error);
		return {
			status: 500,
			body: JSON.stringify({ error: 'Internal Server Error' }),
		};
	}
});

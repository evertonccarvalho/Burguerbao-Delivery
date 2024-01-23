import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event);

		const createdAddress = await prisma.addresses.create({
			data: {
				userId: body.userId,
				name: body.name,
				address: body.address,
				zipcode: body.zipCode,
				city: body.city,
				country: body.country,
			},
		});

		return createdAddress;
	} catch (error) {
		console.error('Error creating address:', error);
		return {
			status: 500,
			body: JSON.stringify({ error: 'Internal Server Error' }),
		};
	}
});

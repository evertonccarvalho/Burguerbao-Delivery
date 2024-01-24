import { PrismaClient, type Category } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event: any) => {
	try {
		const categories: Category[] = await prisma.category.findMany();

		// Log the categories to see if they are fetched correctly
		console.log('apicategories', categories);

		return categories;
	} catch (error) {
		// Handle errors appropriately
		console.error('Error fetching categories:', error);
		throw new Error('Failed to fetch categories.'); // Re-throw the error for further handling
	} finally {
		await prisma.$disconnect(); // Disconnect Prisma client after fetching
	}
});

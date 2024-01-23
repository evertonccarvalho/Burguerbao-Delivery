import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// export default defineEventHandler(async (event) => {
// 	let categories = await prisma.category.findMany();
// 	return categories;
// });

export type Category = {
	id: number;
	name: string;
	slug: string;
	imageUrl: string | null;
};

export default defineEventHandler(async (event: any) => {
	try {
		const categories: Category[] = await prisma.category.findMany();

		// Log the categories to see if they are fetched correctly
		console.log('apicategories', categories);

		return categories;
	} catch (error) {
		// Handle errors appropriately
		console.error('Error fetching categories:', error);
		throw error; // Re-throw the error for further handling
	} finally {
		await prisma.$disconnect(); // Disconnect Prisma client after fetching
	}
});

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type Product = {
	id: number;
	title: string;
	description: string;
	imageUrls: string[];
	price: number;
	categoryId: number;
	discountPercentage: number;
	created_at: Date | null;
};

export default defineEventHandler(async (event: any) => {
	try {
		const products: Product[] = await prisma.products.findMany();

		// Log the products to see if they are fetched correctly
		console.log('apiPRODUCTS', products);

		return products;
	} catch (error) {
		// Handle errors appropriately
		console.error('Error fetching products:', error);
		throw error; // Re-throw the error for further handling
	} finally {
		await prisma.$disconnect(); // Disconnect Prisma client after fetching
	}
});

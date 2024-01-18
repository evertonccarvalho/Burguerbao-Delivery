import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	try {
		const hamburguerCategory = await prisma.category.create({
			data: {
				name: 'Hamburguer',
				slug: 'hamburguer',
				imageUrl:
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
			},
		});

		const hamburguers = [
			{
				title: 'Hamburguer Clássico de Carne',
				description:
					'Suculento hambúrguer de carne bovina coberto com alface fresca, tomate, cebola e nosso molho especial. Servido em um pão de gergelim.',
				url: 'https://picsum.photos/id/7/800/800',
				price: 2500,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
			},
			{
				title: 'Hamburguer Vegetariano Delicioso',
				description:
					'Um delicioso hambúrguer vegetariano feito com uma mistura de vegetais frescos e ervas. Coberto com abacate, alface e tomate. Servido em um pão integral.',
				url: 'https://picsum.photos/id/20/800/800',
				price: 1999,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
			},
			{
				title: 'Hamburguer Vegetariano Delicioso',
				description:
					'Um delicioso hambúrguer vegetariano feito com uma mistura de vegetais frescos e ervas. Coberto com abacate, alface e tomate. Servido em um pão integral.',
				url: 'https://picsum.photos/id/20/800/800',
				price: 1999,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
			},
			{
				title: 'Hamburguer de Frango Apimentado',
				description:
					'Peito de frango grelhado marinado em uma mistura picante de ervas e especiarias. Coberto com jalapeños, queijo pepper jack e maionese de chipotle.',
				url: 'https://picsum.photos/id/21/800/800',
				price: 9999,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
			},
			{
				title: 'Hamburguer de Peixe Fresco',
				description:
					'Filete de peixe fresco preparado com uma crosta crocante. Servido com alface, tomate e molho tártaro em um pão de batata-doce.',
				url: 'https://picsum.photos/id/24/800/800',
				price: 5999,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
			},
			{
				title: 'Hamburguer Duplo Bacon',
				description:
					'Dois hambúrgueres suculentos cobertos com queijo cheddar derretido e fatias crocantes de bacon. Servido em um pão de hambúrguer tradicional.',
				url: 'https://picsum.photos/id/34/800/800',
				price: 6589,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
			},
			{
				title: 'Hamburguer de Costela Defumada',
				description:
					'Saboroso hambúrguer de costela defumada, regado com molho barbecue caseiro. Com alface, cebola caramelizada e queijo defumado. Servido em um pão de brioche.',
				url: 'https://picsum.photos/id/45/800/800',
				price: 7899,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
			},
			{
				title: 'Hamburguer de Costela Defumada',
				description:
					'Saboroso hambúrguer de costela defumada, regado com molho barbecue caseiro. Com alface, cebola caramelizada e queijo defumado. Servido em um pão de brioche.',
				url: 'https://picsum.photos/id/45/800/800',
				price: 7899,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
			},
			{
				title: 'Hamburguer Picante de Jalapeño',
				description:
					'Hambúrguer com carne temperada e picante, coberto com queijo pepper jack derretido, jalapeños fatiados e molho de pimenta. Servido em um pão de hambúrguer de pimenta.',
				url: 'https://picsum.photos/id/60/800/800',
				price: 1450,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
			},
			{
				title: 'Hamburguer Picante de Jalapeño',
				description:
					'Hambúrguer com carne temperada e picante, coberto com queijo pepper jack derretido, jalapeños fatiados e molho de pimenta. Servido em um pão de hambúrguer de pimenta.',
				url: 'https://picsum.photos/id/60/800/800',
				price: 1450,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
			},
			{
				title: 'Hamburguer Picante de Jalapeño',
				description:
					'Hambúrguer com carne temperada e picante, coberto com queijo pepper jack derretido, jalapeños fatiados e molho de pimenta. Servido em um pão de hambúrguer de pimenta.',
				url: 'https://picsum.photos/id/60/800/800',
				price: 1450,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
			},
		];

		await prisma.products.createMany({
			data: hamburguers,
		});

		const refrigerantesCategory = await prisma.category.create({
			data: {
				name: 'Refrigerantes',
				slug: 'refrigerantes',
				imageUrl:
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/coca.png?t=2024-01-18T17%3A47%3A11.486Z',
			},
		});

		const drinks = [
			{
				title: 'Coca-Cola',
				description: 'Refrigerante gaseificado à base de cola.',
				url: 'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/coca.png?t=2024-01-18T17%3A47%3A11.486Z',
				price: 2500,
				categoryId: refrigerantesCategory.id,
				discountPercentage: 10, // 10% discount
			},
			{
				title: 'Pepsi',
				description: 'Refrescante refrigerante com sabor de cola.',
				url: 'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/pepsi.png?t=2024-01-18T17%3A47%3A26.379Z',
				price: 2300,
				categoryId: refrigerantesCategory.id,
				discountPercentage: 5, // 5% discount
			},
			{
				title: 'Sprite',
				description: 'Refrigerante cítrico e não cola com sabor de limão-lima.',
				url: 'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/sprite.png',
				price: 2200,
				categoryId: refrigerantesCategory.id,
				discountPercentage: 0,
			},
			// Adicione mais refrigerantes conforme necessário
		];

		await prisma.products.createMany({
			data: drinks,
		});

		// Adicione mais produtos conforme necessário
		console.log('Seed completed successfully');
	} catch (error) {
		console.error('Error seeding database:', error);
	} finally {
		await prisma.$disconnect();
	}
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});

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
				imageUrls: [
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
				],
				price: 2500,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
				extras: [1, 2, 3], // IDs dos extras associados
			},
			{
				title: 'Hamburguer Vegetariano Delicioso',
				description:
					'Um delicioso hambúrguer vegetariano feito com uma mistura de vegetais frescos e ervas. Coberto com abacate, alface e tomate. Servido em um pão integral.',
				imageUrls: [
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
				],
				price: 1999,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
				extras: [1, 2, 3], // IDs dos extras associados
			},
			{
				title: 'Hamburguer Vegetariano Delicioso',
				description:
					'Um delicioso hambúrguer vegetariano feito com uma mistura de vegetais frescos e ervas. Coberto com abacate, alface e tomate. Servido em um pão integral.',
				imageUrls: [
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
				],
				price: 1999,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
				extras: [1, 2, 3], // IDs dos extras associados
			},
			{
				title: 'Hamburguer de Frango Apimentado',
				description:
					'Peito de frango grelhado marinado em uma mistura picante de ervas e especiarias. Coberto com jalapeños, queijo pepper jack e maionese de chipotle.',
				imageUrls: [
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
				],
				price: 9999,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
				extras: [1, 2, 3], // IDs dos extras associados
			},
			{
				title: 'Hamburguer de Peixe Fresco',
				description:
					'Filete de peixe fresco preparado com uma crosta crocante. Servido com alface, tomate e molho tártaro em um pão de batata-doce.',
				imageUrls: [
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
				],
				price: 5999,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
				extras: [1, 2, 3], // IDs dos extras associados
			},
			{
				title: 'Hamburguer Duplo Bacon',
				description:
					'Dois hambúrgueres suculentos cobertos com queijo cheddar derretido e fatias crocantes de bacon. Servido em um pão de hambúrguer tradicional.',
				imageUrls: [
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
				],
				price: 6589,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
				extras: [1, 2, 3], // IDs dos extras associados
			},
			{
				title: 'Hamburguer de Costela Defumada',
				description:
					'Saboroso hambúrguer de costela defumada, regado com molho barbecue caseiro. Com alface, cebola caramelizada e queijo defumado. Servido em um pão de brioche.',
				imageUrls: [
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
				],
				price: 7899,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
				extras: [1, 2, 3], // IDs dos extras associados
			},
			{
				title: 'Hamburguer de Costela Defumada',
				description:
					'Saboroso hambúrguer de costela defumada, regado com molho barbecue caseiro. Com alface, cebola caramelizada e queijo defumado. Servido em um pão de brioche.',
				imageUrls: [
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
				],
				price: 7899,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
				extras: [1, 2, 3], // IDs dos extras associados
			},
			{
				title: 'Hamburguer Picante de Jalapeño',
				description:
					'Hambúrguer com carne temperada e picante, coberto com queijo pepper jack derretido, jalapeños fatiados e molho de pimenta. Servido em um pão de hambúrguer de pimenta.',
				imageUrls: [
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
				],
				price: 1450,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
				extras: [1, 2, 3], // IDs dos extras associados
			},
			{
				title: 'Hamburguer Picante de Jalapeño',
				description:
					'Hambúrguer com carne temperada e picante, coberto com queijo pepper jack derretido, jalapeños fatiados e molho de pimenta. Servido em um pão de hambúrguer de pimenta.',
				imageUrls: [
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
				],
				price: 1450,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
				extras: [1, 2, 3], // IDs dos extras associados
			},
			{
				title: 'Hamburguer Picante de Jalapeño',
				description:
					'Hambúrguer com carne temperada e picante, coberto com queijo pepper jack derretido, jalapeños fatiados e molho de pimenta. Servido em um pão de hambúrguer de pimenta.',
				imageUrls: [
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/hamburguer.png?t=2024-01-18T17%3A48%3A00.815Z',
				],
				price: 1450,
				categoryId: hamburguerCategory.id,
				discountPercentage: 10, // 10% discount
				extras: [], // IDs dos extras associados
			},
		];

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
				imageUrls: [
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/coca.png?t=2024-01-18T17%3A47%3A11.486Z',
				],
				url: '',
				price: 2500,
				categoryId: refrigerantesCategory.id,
				discountPercentage: 10, // 10% discount
			},
			{
				title: 'Pepsi',
				description: 'Refrescante refrigerante com sabor de cola.',
				imageUrls: [
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/pepsi.png?t=2024-01-18T17%3A47%3A26.379Z',
				],
				price: 2300,
				categoryId: refrigerantesCategory.id,
				discountPercentage: 5, // 5% discount
			},
			{
				title: 'Sprite',
				description: 'Refrigerante cítrico e não cola com sabor de limão-lima.',
				imageUrls: [
					'https://mumttahimuhgqbemzydu.supabase.co/storage/v1/object/public/ean-store/sprite.png',
				],
				price: 2200,
				categoryId: refrigerantesCategory.id,
				discountPercentage: 0,
			},
			// Adicione mais refrigerantes conforme necessário
		];

		const extrasData = [
			{
				name: 'Ovo',
				description: 'Descrição do Extra 1',
				price: 250, // Em centavos (R$2.50)
			},
			{
				name: 'Queijo',
				description: 'Descrição do Extra 2',
				price: 300, // Em centavos (R$3.00)
			},
			{
				name: 'Calabresa',
				description: 'Descrição do Extra 3',
				price: 250, // Em centavos (R$1.00)
			},
		];

		await prisma.products.createMany({
			data: hamburguers,
		});

		await prisma.products.createMany({
			data: drinks,
		});

		await prisma.extras.createMany({
			data: extrasData,
		});

		console.log('Seed completed successfully');
	} catch (error) {
		console.error('Error seeding database:', error);
	} finally {
		await prisma.$disconnect();
	}
}

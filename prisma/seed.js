import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedProducts() {
	try {
		await prisma.products.create({
			data: {
				title: 'Hamburguer Clássico de Carne',
				description:
					'Suculento hambúrguer de carne bovina coberto com alface fresca, tomate, cebola e nosso molho especial. Servido em um pão de gergelim.',
				url: 'https://picsum.photos/id/7/800/800',
				price: 2500,
			},
		});

		await prisma.products.create({
			data: {
				title: 'Hamburguer Vegetariano Delicioso',
				description:
					'Um delicioso hambúrguer vegetariano feito com uma mistura de vegetais frescos e ervas. Coberto com abacate, alface e tomate. Servido em um pão integral.',
				url: 'https://picsum.photos/id/20/800/800',
				price: 1999,
			},
		});

		await prisma.products.create({
			data: {
				title: 'Hamburguer de Frango Apimentado',
				description:
					'Peito de frango grelhado marinado em uma mistura picante de ervas e especiarias. Coberto com jalapeños, queijo pepper jack e maionese de chipotle.',
				url: 'https://picsum.photos/id/21/800/800',
				price: 9999,
			},
		});

		await prisma.products.create({
			data: {
				title: 'Hamburguer de Peixe Fresco',
				description:
					'Filete de peixe fresco preparado com uma crosta crocante. Servido com alface, tomate e molho tártaro em um pão de batata-doce.',
				url: 'https://picsum.photos/id/24/800/800',
				price: 5999,
			},
		});

		await prisma.products.create({
			data: {
				title: 'Hamburguer Duplo Bacon',
				description:
					'Dois hambúrgueres suculentos cobertos com queijo cheddar derretido e fatias crocantes de bacon. Servido em um pão de hambúrguer tradicional.',
				url: 'https://picsum.photos/id/34/800/800',
				price: 6589,
			},
		});

		await prisma.products.create({
			data: {
				title: 'Hamburguer de Costela Defumada',
				description:
					'Saboroso hambúrguer de costela defumada, regado com molho barbecue caseiro. Com alface, cebola caramelizada e queijo defumado. Servido em um pão de brioche.',
				url: 'https://picsum.photos/id/45/800/800',
				price: 7899,
			},
		});

		await prisma.products.create({
			data: {
				title: 'Hamburguer Vegano de Quinoa',
				description:
					'Hambúrguer vegano feito com quinoa, feijão-preto e uma mistura de temperos. Coberto com abacate, rúcula e molho vegano especial. Servido em um pão de grãos integrais.',
				url: 'https://picsum.photos/id/50/800/800',
				price: 1299,
			},
		});

		await prisma.products.create({
			data: {
				title: 'Hamburguer Picante de Jalapeño',
				description:
					'Hambúrguer com carne temperada e picante, coberto com queijo pepper jack derretido, jalapeños fatiados e molho de pimenta. Servido em um pão de hambúrguer de pimenta.',
				url: 'https://picsum.photos/id/60/800/800',
				price: 1450,
			},
		});

		await prisma.products.create({
			data: {
				title: 'Hamburguer Supreme de Frango',
				description:
					'Supremo hambúrguer de frango grelhado, coberto com queijo suíço, cogumelos salteados e molho especial. Servido em um pão de batata-doce.',
				url: 'https://picsum.photos/id/70/800/800',
				price: 8999,
			},
		});

		await prisma.products.create({
			data: {
				title: 'Hamburguer de Cordeiro Mediterrâneo',
				description:
					'Delicioso hambúrguer de cordeiro temperado com ervas mediterrâneas. Coberto com tzatziki, tomate e pepino. Servido em um pão de pita.',
				url: 'https://picsum.photos/id/80/800/800',
				price: 10999,
			},
		});

		await prisma.products.create({
			data: {
				title: 'Hamburguer Clássico com Ovo',
				description:
					'Hambúrguer clássico de carne com ovo frito, bacon crocante e queijo americano. Servido em um pão de hambúrguer tradicional.',
				url: 'https://picsum.photos/id/90/800/800',
				price: 8799,
			},
		});

		// Adicione mais produtos conforme necessário
	} catch (error) {
		console.error(error);
	} finally {
		await prisma.$disconnect();
	}
}

seedProducts();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const products = [
    { id: 'p1', name: 'Premium 1L', price: 12 },
    { id: 'p2', name: 'Premium 5L', price: 22 },
    { id: 'p3', name: 'Premium 10L', price: 32 },
    { id: 'p4', name: 'Premium 20L', price: 42 },
    { id: 'a1', name: 'Alcalina 1L', price: 15 },
    { id: 'a2', name: 'Alcalina 5L', price: 28 },
    { id: 'a3', name: 'Alcalina 10L', price: 38 },
    { id: 'a4', name: 'Alcalina 20L', price: 48 },
    { id: 'ciel', name: 'Garrafón Ciel', price: 38 }, // Assuming a price
    { id: 'epura', name: 'Garrafón Epura', price: 35 },
    { id: 'bonafon', name: 'Garrafón Bonafon', price: 36 },
    { id: 'darmax', name: 'Garrafón Darmax', price: 34 },
    { id: '10litros', name: 'Garrafón 10L', price: 25 },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { id: product.id },
      update: {},
      create: {
        id: product.id,
        name: product.name,
        price: product.price,
      },
    });
  }

  console.log('Seeded', products.length, 'products');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

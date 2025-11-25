// prisma/seed.ts
import { PrismaClient, OrderStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  console.log('🌱 Seeding database...');

  // -----------------------------------------------------
  // Administrador
  // -----------------------------------------------------
  const admin = await prisma.administrador.create({
    data: {
      nombre: "Erick Admin",
      email: "admin@darmax.com",
      password: "123456",
      telefono: "5512345678",
    },
  });

  // -----------------------------------------------------
  // Vendedores
  // -----------------------------------------------------
  const vendedor1 = await prisma.vendedor.create({
    data: {
      nombre: "Carlos Vendedor",
      edad: 28,
      email: "carlos@darmax.com",
      telefono: "5511223344",
      direccion: "Calle Vendedor 123",
      password: "123456",
    },
  });

  const vendedor2 = await prisma.vendedor.create({
    data: {
      nombre: "Mariana Vendedora",
      edad: 31,
      email: "mariana@darmax.com",
      telefono: "5512334455",
      direccion: "Av. Juárez 20",
      password: "123456",
    },
  });

  // -----------------------------------------------------
  // Repartidores
  // -----------------------------------------------------
  const repartidor1 = await prisma.repartidor.create({
    data: {
      nombre: "Luis Repartidor",
      edad: 25,
      email: "luis@darmax.com",
      telefono: "5519876543",
      direccion: "Col. Centro",
      password: "123456",
    },
  });

  const repartidor2 = await prisma.repartidor.create({
    data: {
      nombre: "Ana Repartidora",
      edad: 27,
      email: "ana@darmax.com",
      telefono: "5523456789",
      direccion: "Col. Roma",
      password: "123456",
    },
  });

  // -----------------------------------------------------
  // Clientes
  // -----------------------------------------------------
  const cliente1 = await prisma.cliente.create({
    data: {
      nombre: "Juan Pérez",
      direccion: "Calle Cliente 55",
      email: "juan@example.com",
      telefono: "5544556677",
      password: "123456",
    },
  });

  const cliente2 = await prisma.cliente.create({
    data: {
      nombre: "Sofía García",
      direccion: "Av. Independencia 100",
      email: "sofia@example.com",
      telefono: "5533445566",
      password: "123456",
    },
  });

  // -----------------------------------------------------
  // Productos + Precios + Inventarios
  // -----------------------------------------------------
  const agua1 = await prisma.product.create({
    data: {
      name: "Agua Garrafón 20L",
      description: "Agua purificada premium",
      prices: {
        create: [
          { price: 35, isDelivery: false },
          { price: 40, isDelivery: true },
        ],
      },
      inventory: {
        create: {
          quantity: 120,
        },
      },
    },
  });

  const agua2 = await prisma.product.create({
    data: {
      name: "Agua Botella 1L",
      description: "Agua clásica",
      prices: {
        create: [
          { price: 12, isDelivery: false },
          { price: 15, isDelivery: true },
        ],
      },
      inventory: {
        create: {
          quantity: 300,
        },
      },
    },
  });

  const agua3 = await prisma.product.create({
    data: {
      name: "Agua Botella 5L",
      description: "Agua para familia",
      prices: {
        create: [
          { price: 25, isDelivery: false },
          { price: 30, isDelivery: true },
        ],
      },
      inventory: {
        create: {
          quantity: 200,
        },
      },
    },
  });

  // -----------------------------------------------------
  // Orden 1 (Con delivery asignado)
  // -----------------------------------------------------
  const order1 = await prisma.order.create({
    data: {
      clienteId: cliente1.id,
      vendedorId: vendedor1.id,
      repartidorId: repartidor1.id,
      status: OrderStatus.EN_CAMINO,
      total: 110,
      isDelivery: true,
      items: {
        create: [
          {
            productId: agua1.id,
            quantity: 2,
            price: 40,
          },
          {
            productId: agua2.id,
            quantity: 2,
            price: 15,
          },
        ],
      },
      delivery: {
        create: {
          address: cliente1.direccion,
          lat: 19.4326,
          lng: -99.1332,
          signature: null,
        },
      },
    },
  });

  // -----------------------------------------------------
  // Orden 2 (Solo mostrador)
  // -----------------------------------------------------
  const order2 = await prisma.order.create({
    data: {
      clienteId: cliente2.id,
      vendedorId: vendedor2.id,
      status: OrderStatus.PENDIENTE,
      total: 24,
      isDelivery: false,
      items: {
        create: [
          {
            productId: agua2.id,
            quantity: 2,
            price: 12,
          },
        ],
      },
    },
  });

  console.log('🌱 Seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

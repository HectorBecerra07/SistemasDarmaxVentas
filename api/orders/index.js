// api/orders/index.js
import { prisma } from '../../lib/prisma.js';
import { getAuthUser } from '../../lib/auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const authUser = getAuthUser(req, res);
  if (!authUser) return;

  const { items, cliente, deliveryInfo, total, isDelivery } = req.body || {};

  if (!items || !cliente || typeof total !== 'number') {
    return res.status(400).json({ error: 'Datos de orden incompletos.' });
  }

  try {
    // Buscar o crear cliente
    const clienteRecord = await prisma.cliente.upsert({
      where: { email: cliente.email },
      update: {
        nombre: cliente.nombre ?? cliente.nombreCompleto,
        telefono: cliente.telefono ?? '',
        direccion: cliente.direccion ?? '',
      },
      create: {
        nombre: cliente.nombre ?? cliente.nombreCompleto ?? 'Cliente sin nombre',
        email: cliente.email,
        telefono: cliente.telefono ?? '',
        direccion: cliente.direccion ?? '',
        password: '', // si es cliente solo por pedido, podrías dejar vacío o generar algo
      },
    });

    // Crear la orden
    const order = await prisma.order.create({
      data: {
        clienteId: clienteRecord.id,
        vendedorId: authUser.role === 'SELLER' ? authUser.userId : null,
        repartidorId: null,
        status: 'PENDIENTE',
        total,
        isDelivery: !!isDelivery,
        items: {
          create: items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
        delivery: isDelivery
          ? {
              create: {
                address: deliveryInfo?.address ?? clienteRecord.direccion,
                lat: deliveryInfo?.lat ?? null,
                lng: deliveryInfo?.lng ?? null,
              },
            }
          : undefined,
      },
      include: {
        items: true,
        delivery: true,
      },
    });

    return res.status(201).json(order);
  } catch (error) {
    console.error('Failed to create order:', error);
    return res.status(500).json({ error: 'Failed to create order' });
  }
}

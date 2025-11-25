// api/drivers/[driverId]/orders.js
import { prisma } from '../../../lib/prisma.js';
import { getAuthUser } from '../../../lib/auth.js';

export default async function handler(req, res) {
  const { driverId } = req.query;

  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const authUser = getAuthUser(req, res);
  if (!authUser) return; // ya respondió con error

  // Solo ADMIN o el propio repartidor puede ver esto
  if (authUser.role !== 'ADMIN' && authUser.userId !== driverId) {
    return res.status(403).json({
      error: 'Forbidden: Solo puedes acceder a tus propias órdenes.',
    });
  }

  try {
    const orders = await prisma.order.findMany({
      where: {
        repartidorId: driverId,
        status: 'ASIGNADO', // Enum OrderStatus
      },
      include: {
        cliente: true,
        items: {
          include: {
            product: true,
          },
        },
        delivery: true,
      },
    });

    return res.status(200).json(orders);
  } catch (error) {
    console.error('Failed to get orders:', error);
    return res.status(500).json({ error: 'Failed to get orders' });
  }
}

// api/orders/[orderId].js
import { prisma } from '../../lib/prisma.js';
import { getAuthUser } from '../../lib/auth.js';

export default async function handler(req, res) {
  const { orderId } = req.query;

  if (req.method !== 'PUT') {
    res.setHeader('Allow', ['PUT']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const authUser = getAuthUser(req, res);
  if (!authUser) return;

  const { status, signature } = req.body || {};

  try {
    const order = await prisma.order.findUnique({ where: { id: orderId } });

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Solo admin o el repartidor asignado
    if (authUser.role !== 'ADMIN' && authUser.userId !== order.repartidorId) {
      return res.status(403).json({
        error: 'Forbidden: No puedes actualizar esta orden.',
      });
    }

    const data = {};

    if (status) {
      data.status = status;
    }

    if (signature) {
      data.delivery = {
        update: {
          signature,
          deliveredAt: new Date(),
        },
      };
    }

    const updated = await prisma.order.update({
      where: { id: orderId },
      data,
      include: {
        delivery: true,
        items: true,
      },
    });

    return res.status(200).json(updated);
  } catch (error) {
    console.error('Failed to update order:', error);
    return res.status(500).json({ error: 'Failed to update order' });
  }
}

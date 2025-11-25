import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { PrismaClient } from './generated/prisma';

const prisma = new PrismaClient();
const app = new Hono();

// API Endpoints

// Get assigned orders for a driver
app.get('/api/drivers/:driverId/orders', async (c) => {
  const { driverId } = c.req.param();
  const orders = await prisma.order.findMany({
    where: {
      driverId: driverId,
      status: 'ASSIGNED',
    },
    include: {
      customer: true,
      items: {
        include: {
          product: true,
        },
      },
      delivery: true,
    },
  });
  return c.json(orders);
});

// Create a new order
app.post('/api/orders', async (c) => {
    const { orderItems, customer, deliveryInfo, total, shippingCost } = await c.req.json();

    // 1. Find or create the customer
    const customerRecord = await prisma.customer.upsert({
        where: { phone: customer.phone },
        update: { name: deliveryInfo.deliveryDetails.name },
        create: { 
            phone: customer.phone,
            name: deliveryInfo.deliveryDetails.name 
        },
    });

    // 2. Create the Order
    const order = await prisma.order.create({
        data: {
            customerId: customerRecord.id,
            status: 'PENDING', // Or 'ASSIGNED' if a driver is assigned immediately
            total: total,
            shippingCost: shippingCost,
            items: {
                create: orderItems.map(item => ({
                    productId: item.id, // Assuming item.id is the productId
                    quantity: item.quantity,
                })),
            },
            delivery: {
                create: {
                    address: deliveryInfo.deliveryDetails.address,
                    phone: deliveryInfo.deliveryDetails.phone,
                    references: deliveryInfo.deliveryDetails.references,
                    name: deliveryInfo.deliveryDetails.name,
                }
            }
        },
        include: {
            items: true,
            delivery: true,
        }
    });

    return c.json(order, 201);
});

// Update an order (for signature)
app.put('/api/orders/:orderId', async (c) => {
  const { orderId } = c.req.param();
  const { status, signature } = await c.req.json();

  const updateData = {};
  if (status) {
    updateData.status = status;
  }
  if (signature) {
    updateData.delivery = {
      update: {
        signature: signature,
      },
    };
  }

  const order = await prisma.order.update({
    where: { id: orderId },
    data: updateData,
  });

  return c.json(order);
});


const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});

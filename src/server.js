const express = require('express');
const cors = require('cors');
const { prisma } = require('./lib/prisma.js');

const app = express();
app.use(cors());
app.use(express.json());

// API Endpoints

// Get assigned orders for a driver
app.get('/api/drivers/:driverId/orders', async (req, res) => {
  const { driverId } = req.params;
  try {
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
    res.json(orders);
  } catch (error) {
    console.error('Failed to get orders:', error);
    res.status(500).json({ error: 'Failed to get orders' });
  }
});

// Create a new order
app.post('/api/orders', async (req, res) => {
    const { orderItems, customer, deliveryInfo, total, shippingCost } = req.body;

    if (!orderItems || !customer || !deliveryInfo) {
      return res.status(400).json({ error: 'Missing required order data.' });
    }

    try {
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

        res.status(201).json(order);
    } catch (error) {
        console.error('Failed to create order:', error);
        res.status(500).json({ error: 'Failed to create order' });
    }
});

// Update an order (for signature)
app.put('/api/orders/:orderId', async (req, res) => {
  const { orderId } = req.params;
  const { status, signature } = req.body;

  try {
    const updateData = {};
    if (status) {
      updateData.status = status;
    }
    
    const orderToUpdate = await prisma.order.findUnique({ where: { id: orderId }});
    if (!orderToUpdate) {
      return res.status(404).json({ error: 'Order not found' });
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

    res.json(order);
  } catch (error) {
    console.error('Failed to update order:', error);
    res.status(500).json({ error: 'Failed to update order' });
  }
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { prisma } = require('./lib/prisma.js');

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET;

// API Endpoints

// User Registration
app.post('/api/register', async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });
    res.status(201).json({ message: 'User created successfully', userId: user.id });
  } catch (error) {
    console.error('Registration error:', error);
    if (error.code === 'P2002') {
        return res.status(409).json({ error: 'Email already in use.' });
    }
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// User Login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Missing email or password' });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      JWT_SECRET,
      { expiresIn: '1d' } // Token expires in 1 day
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Failed to login' });
  }
});

const { authenticateToken, authorizeRole } = require('./middleware/authMiddleware');

// Get assigned orders for a driver
app.get('/api/drivers/:driverId/orders', authenticateToken, async (req, res) => {
  const { driverId } = req.params;
  
  //- Check if the authenticated user is the driver being requested or an admin
  if (req.user.role !== 'ADMIN' && req.user.userId !== driverId) {
    return res.status(403).json({ error: 'Forbidden: You can only access your own orders.' });
  }

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
app.post('/api/orders', authenticateToken, async (req, res) => {
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

// Update an order (for signature and status)
app.put('/api/orders/:orderId', authenticateToken, async (req, res) => {
  const { orderId } = req.params;
  const { status, signature } = req.body;

  try {
    const orderToUpdate = await prisma.order.findUnique({ where: { id: orderId }});
    if (!orderToUpdate) {
      return res.status(404).json({ error: 'Order not found' });
    }

    //- Check if the user is an admin or the driver assigned to the order
    if (req.user.role !== 'ADMIN' && req.user.userId !== orderToUpdate.driverId) {
        return res.status(403).json({ error: 'Forbidden: You cannot update this order.' });
    }

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


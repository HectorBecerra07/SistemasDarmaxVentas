// api/login.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../lib/prisma.js';

const JWT_SECRET = process.env.JWT_SECRET;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ error: 'Email y contraseña son requeridos.' });
  }

  try {
    // Vamos buscando según el tipo de usuario
    // 1) Admin
    let user = await prisma.administrador.findUnique({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { userId: user.id, role: 'ADMIN' },
        JWT_SECRET,
        { expiresIn: '1d' }
      );

      return res.status(200).json({
        token,
        user: {
          id: user.id,
          nombre: user.nombre,
          email: user.email,
          role: 'ADMIN',
        },
      });
    }

    // 2) Repartidor (DRIVER)
    user = await prisma.repartidor.findUnique({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { userId: user.id, role: 'DRIVER' },
        JWT_SECRET,
        { expiresIn: '1d' }
      );

      return res.status(200).json({
        token,
        user: {
          id: user.id,
          nombre: user.nombre,
          email: user.email,
          role: 'DRIVER',
        },
      });
    }

    // 3) Vendedor (SELLER)
    user = await prisma.vendedor.findUnique({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { userId: user.id, role: 'SELLER' },
        JWT_SECRET,
        { expiresIn: '1d' }
      );

      return res.status(200).json({
        token,
        user: {
          id: user.id,
          nombre: user.nombre,
          email: user.email,
          role: 'SELLER',
        },
      });
    }

    // 4) Cliente (CLIENT)
    user = await prisma.cliente.findUnique({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { userId: user.id, role: 'CLIENT' },
        JWT_SECRET,
        { expiresIn: '1d' }
      );

      return res.status(200).json({
        token,
        user: {
          id: user.id,
          nombre: user.nombre,
          email: user.email,
          role: 'CLIENT',
        },
      });
    }

    // Si aquí ya no encontró nada:
    return res.status(401).json({ error: 'Credenciales inválidas' });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Error interno al iniciar sesión' });
  }
}

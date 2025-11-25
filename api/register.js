import bcrypt from 'bcrypt';
import { prisma } from '../lib/prisma.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { nombre, email, password, telefono, direccion } = req.body || {};

  if (!nombre || !email || !password || !telefono || !direccion) {
    return res.status(400).json({ error: 'Faltan campos requeridos.' });
  }

  try {
    const exists = await prisma.cliente.findUnique({ where: { email } });
    if (exists) {
      return res.status(409).json({ error: 'El correo ya está registrado.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const cliente = await prisma.cliente.create({
      data: {
        nombre,
        email,
        telefono,
        direccion,
        password: hashedPassword,
      },
    });

    return res.status(201).json({
      message: 'Cliente registrado correctamente',
      clienteId: cliente.id,
    });

  } catch (error) {
    console.error('Register error:', error);
    return res.status(500).json({ error: 'Error al registrar cliente' });
  }
}

import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const globalForPrisma = globalThis;

const prismaClient =
  globalForPrisma.prisma ||
  new PrismaClient().$extends(withAccelerate());

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = prismaClient;
}

export const prisma = prismaClient;

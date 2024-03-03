import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function fetchUserBalances() {
  const usersWithBalances = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      balance: true,
    },
  });
  return usersWithBalances;
}
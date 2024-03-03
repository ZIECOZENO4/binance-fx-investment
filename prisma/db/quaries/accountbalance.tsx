// lib/db/queries.ts
import { prisma } from '../db/db';

export async function getAllUserBalances() {
 const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      balance: true,
    },
 });
 return users;
}

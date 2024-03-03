import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 const { id } = req.query;

 if (!id) {
    return res.status(400).json({ error: 'User ID is required' });
 }

 try {
    const user = await prisma.user.findUnique({
      where: {
        id: String(id),
      },
      select: {
        balance: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json({ balance: user.balance });
 } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
 }
}
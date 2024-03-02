// app/api/accountbalance/route.tsx
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../prisma/db/db';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
 const { userId } = req.query;

 if (typeof userId !== 'string') {
    return res.status(400).json({ error: 'Invalid user ID' });
 }

 try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { balance: true },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json({ balance: user.balance });
 } catch (error) {
    console.error('Failed to fetch balance:', error);
    return res.status(500).json({ error: 'Failed to fetch balance' });
 }
}

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    try {
        // Fetch all OutInvest records, including related User data
        const outInvestments = await prisma.outInvest.findMany({
            include: {
                user: true,
            },
            orderBy: {
                time: 'desc',
            },
        });

        // Iterate over each OutInvest record
        for (const outInvest of outInvestments) {
            if (outInvest.user) {
                const userId = outInvest.user.id;
                const user = await prisma.user.findUnique({
                    where: { id: userId },
                });
if (user && user.balance !== null && user.balance >= parseFloat(outInvest.outAmount || '0')) {
  const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { balance: { decrement: parseFloat(outInvest.outAmount || '0') } },
  });

  console.log(`Updated balance for user ${updatedUser.id}: ${updatedUser.balance}`);
} else {
  console.log(`Insufficient funds for user ${userId}`);
  return NextResponse.json({ error: 'Insufficient funds' }, { status: 400 });
}

            }
        }

        // Return the fetched OutInvest records
        return NextResponse.json(outInvestments);
    } catch (error) {
        console.error('Error fetching and updating out-investments:', error);
        return NextResponse.json({ error: 'Error fetching and updating out-investments' }, { status: 500 });
    }
}

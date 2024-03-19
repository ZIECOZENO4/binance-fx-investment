import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';
export async function GET(request: NextRequest) {
    try {
        const payments = await prisma.payment.findMany({
            include: {
                user: true,
            },
            orderBy: {
                time: 'desc',
            },
        });
        for (const payment of payments) {
            if (payment.user) {
                const userId = payment.user.id;
                const user = await prisma.user.findUnique({
                    where: { id: userId },
                });

                if (user && user.balance !== null && user.balance >= parseFloat(payment.amount)) {
                    const updatedUser = await prisma.user.update({
                        where: { id: userId },
                        data: { balance: { decrement: parseFloat(payment.amount) } },
                    });

                    console.log(`Updated balance for user ${updatedUser.id}: ${updatedUser.balance}`);
                } else {
                    console.log(`Insufficient funds for user ${userId}`);
                    return NextResponse.json({ error: 'Insufficient funds' }, { status: 400 });
                }
            }
        }

        return NextResponse.json(payments);
    } catch (error) {
        console.error('Error fetching and updating payments:', error);
        return NextResponse.json({ error: 'Error fetching and updating payments' }, { status: 500 });
    }
}
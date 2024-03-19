// app/api/fetchAndUpdateBalance.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';
export async function GET(request: NextRequest) {
    try {
        const deposits = await prisma.deposit.findMany({
            include: {
                user: true,
            },
            orderBy: {
                time: 'desc',
            },
        });


        for (const deposit of deposits) {
            if (deposit.user) {
                const updatedUser = await prisma.user.update({
                    where: { id: deposit.user.id },
                    data: { balance: { increment: parseFloat(deposit.depositorAmount) } },
                });

                console.log(`Updated balance for user ${updatedUser.id}: ${updatedUser.balance}`);
            }
        }

        return NextResponse.json(deposits);
    } catch (error) {
        console.error('Error fetching and updating deposits:', error);
        return NextResponse.json({ error: 'Error fetching and updating deposits' }, { status: 500 });
    }
}
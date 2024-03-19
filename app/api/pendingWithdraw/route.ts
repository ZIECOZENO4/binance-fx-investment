
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';
export async function POST(request: NextRequest) {
    const body = await request.json();
    const { amount, coin, walletAddress, userId, userName, gasFee,  time } = body;

    try {
        const withdrawal = await prisma.withdrawal.create({
            data: {
                amount,
                coin,
                walletAddress,
                time: new Date(time),
                gasFee,
                userId,
                userName,
            },
        });

        console.log('Withdrawal request saved:', withdrawal);
        return NextResponse.json({ message: 'Withdrawal request saved successfully', withdrawal });
    } catch (error) {
        console.error('Error saving withdrawal request:', error);
        return NextResponse.json({ error: 'Error saving withdrawal request' }, { status: 500 });
    }
}

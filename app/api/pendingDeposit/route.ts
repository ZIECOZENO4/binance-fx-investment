// app/api/sendToAdmin.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { depositorTransactionId, depositorWalletAddress, time, userId, depositorAmount, depositorName, depositorCoin } = body;

    try {
        const deposit = await prisma.deposit.create({
            data: {
                depositorTransactionId,
                depositorWalletAddress,
                time: new Date(time),
                userId,
                depositorAmount,
                depositorName,
                depositorCoin,
            },
        });

        console.log('Deposit saved:', deposit);
        return NextResponse.json({ message: 'Deposit saved successfully', deposit });
    } catch (error) {
        console.error('Error saving deposit:', error);
        return NextResponse.json({ error: 'Error saving deposit' }, { status: 500 });
    }
}

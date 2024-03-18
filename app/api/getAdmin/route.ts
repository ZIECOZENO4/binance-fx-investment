// app/api/getAdmin/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
    const body = await request.json();

    const { amount, coin, plan, planId, time, userName, balance, gasFee, userId } = body;

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        // Parse balance to a number before comparing
        const parsedBalance = parseFloat(balance);
        const parsedAmount = parseFloat(amount);

        // Check if user.balance is not null before comparing
        if (user.balance !== null && parsedBalance < parsedAmount) {
            return NextResponse.json({ error: 'Insufficient funds' }, { status: 400 });
        }

        // ... rest of the code
    } catch (error) {
        console.error('Error processing payment:', error);
        return NextResponse.json({ error: 'Error processing payment' }, { status: 500 });
    }
}
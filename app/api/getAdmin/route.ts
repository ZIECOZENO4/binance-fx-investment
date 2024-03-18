
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

        if (user.balance  < parseFloat(amount)) {
            return NextResponse.json({ error: 'Insufficient funds' }, { status: 400 });
        }


        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { balance: { decrement: parseFloat(amount) } },
        });


        const payment = await prisma.payment.create({
            data: {
                amount,
                coin,
                plan,
                planId,
                time: new Date(time), // Ensure time is a Date object
                balance,
                gasFee,
                userId,
                userName,
                confirmed: true, // Set confirmed to true
            },
        });

        console.log('Payment saved:', payment);

        // Return a 200 OK response with a success message
        return NextResponse.json({ message: 'Payment saved successfully', payment });
    } catch (error) {
        console.error('Error saving payment:', error);

        // Return a 500 Internal Server Error response with an error message
        return NextResponse.json({ error: 'Error saving payment' }, { status: 500 });
    }
}
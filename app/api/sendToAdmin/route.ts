// app/api/sendToAdmin.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';
export async function POST(request: NextRequest) {
    // Extract the request body
    const body = await request.json();

    // Destructure the expected fields from the request body
    const { amount, coin, plan, planId, time, userName, balance, gasFee, userId } = body;

    // Process the data as needed, e.g., save it to a database
    try {
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

// app/api/sendToAdmin.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    // Extract the request body
    const body = await request.json();

    // Destructure the expected fields from the request body
    const { amount, coin, time, userName, balance, gasFee, userId, walletAddress,user } = body;

    // Process the data as needed, e.g., save it to a database
    try {
        const pendingWithdraw = await prisma.pendingWithdraw.create({
            data: {
                amount,
                coin,
                walletAddress,
                time: new Date(time), // Ensure time is a Date object
                balance,
                gasFee,
                userId,
                userName,
                user
            },
        });

        console.log('Withdraw saved:', pendingWithdraw);

        // Return a 200 OK response with a success message
        return NextResponse.json({ message: 'Withdraw saved successfully',  pendingWithdraw });
    } catch (error) {
        console.error('Error saving withdraw:', error);

        // Return a 500 Internal Server Error response with an error message
        return NextResponse.json({ error: 'Error saving withdraw' }, { status: 500 });
    }
}

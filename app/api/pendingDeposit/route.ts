// app/api/sendToAdmin.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    // Extract the request body
    const body = await request.json();

    // Destructure the expected fields from the request body
    const { transactionId, time, user, userId, walletAddress } = body;

    // Validate the request body
    if (!transactionId || !walletAddress || !userId) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Process the data as needed, e.g., save it to a database
    try {
        const deposit = await prisma.deposit.create({
            data: {
                transactionId,
                walletAddress,
                time: new Date(time),
                userId,
                user,
            },
        });

        console.log('Deposit saved:', deposit);

        // Return a 200 OK response with a success message
        return NextResponse.json({ message: 'Deposit saved successfully', deposit });
    } catch (error) {
        console.error('Error saving deposit:', error);

        // Return a 500 Internal Server Error response with an error message
        return NextResponse.json({ error: 'Error saving deposit' }, { status: 500 });
    }
}
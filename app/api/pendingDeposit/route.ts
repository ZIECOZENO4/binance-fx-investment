// app/api/sendToAdmin.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    // Extract the request body
    const body = await request.json();

    // Destructure the expected fields from the request body
    const {             depositorTransactionId,
        depositorWalletAddress,
        userId,
        depositorAmount,
        depositorName,
        depositorCoin,  user} = body;

    try {
        const pendingDeposit = await prisma.pendingDeposit.create({
            data: {
                depositorTransactionId,
                depositorWalletAddress,
                time: new Date().toISOString(),
                userId, 
                user,
                depositorAmount,
                depositorName,
                depositorCoin
            },
        });
        console.log('Request body:', body);
        console.log('Deposit saved:', pendingDeposit);

        // Return a 200 OK response with a success message
        return NextResponse.json({ message: 'Deposit saved successfully', pendingDeposit });
    } catch (error) {
        console.error('Error saving deposit:', error);

        // Return a 500 Internal Server Error response with an error message
        return NextResponse.json({ error: 'Error saving deposit' }, { status: 500 });
    }
}
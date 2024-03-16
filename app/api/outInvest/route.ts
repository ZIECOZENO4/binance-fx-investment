// app/api/sendToAdmin.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    // Extract the request body
    const body = await request.json();

    // Destructure the expected fields from the request body
    const {  transactionId,
        walletAddress, time, userName, userId } = body;

    // Process the data as needed, e.g., save it to a database
    try {
        const outinvest = await prisma.outinvest.create({
            data: {
                transactionId,
      walletAddress,
                time: new Date(time), // Ensure time is a Date object
                userId,
                userName,
            },
        });

        console.log('OutInvest saved:', outinvest);

        // Return a 200 OK response with a success message
        return NextResponse.json({ message: 'OutInvest saved successfully', outinvest });
    } catch (error) {
        console.error('Error saving outinvest:', error);

        // Return a 500 Internal Server Error response with an error message
        return NextResponse.json({ error: 'Error saving outinvest' }, { status: 500 });
    }
}
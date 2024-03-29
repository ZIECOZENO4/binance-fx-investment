// app/api/sendToAdmin.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers'
const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';
export async function POST(request: NextRequest) {
    // Extract the request body
    const body = await request.json();

    // Destructure the expected fields from the request body
    const {   gasFee,
        walletAddress, time, userName, userId,     outCoin,
        outAmount} = body;

    // Process the data as needed, e.g., save it to a database
    try {
        const outInvest = await prisma.outInvest.create({
            data: {
      walletAddress,
                time: new Date(time), 
                userId,
                userName,
                gasFee,
                outCoin,
                outAmount,
            },
        });

        console.log('OutInvest saved:', outInvest);

        // Return a 200 OK response with a success message
        return NextResponse.json({ message: 'OutInvest saved successfully', outInvest });
    } catch (error) {
        console.error('Error saving outinvest:', error);

        // Return a 500 Internal Server Error response with an error message
        return NextResponse.json({ error: 'Error saving outinvest' }, { status: 500 });
    }
}

// app/api/getWithdrawals.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic'; // Force dynamic execution, bypassing cache

export async function GET(request: NextRequest) {



    try {
        // Fetch all withdrawal records for the specified user from the database, sorted by the 'time' field in descending order
        const withdrawals = await prisma.withdrawal.findMany({
            orderBy: {
                time: 'desc', // Sorting by the 'time' field in descending order
            },
        });

        // Return a 200 OK response with the withdrawals data
        return NextResponse.json(withdrawals);
    } catch (error) {
        console.error('Error fetching withdrawals:', error);

        // Return a 500 Internal Server Error response with an error message
        return NextResponse.json({ error: 'Error fetching withdrawals' }, { status: 500 });
    }
}

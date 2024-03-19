// app/api/getWithdrawals.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic'; // Force dynamic execution, bypassing cache

export async function GET(request: NextRequest) {



    try {

        const withdrawals = await prisma.withdrawal.findMany({
            include: {
                user: true,
            },
            orderBy: {
                time: 'desc', 
            },
        });

        return NextResponse.json(withdrawals);
    } catch (error) {
        console.error('Error fetching withdrawals:', error);
        return NextResponse.json({ error: 'Error fetching withdrawals' }, { status: 500 });
    }
}

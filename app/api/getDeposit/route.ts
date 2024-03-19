// app/api/fetchAndUpdateBalance.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';
export async function GET(request: NextRequest) {
    try {
        const deposits = await prisma.deposit.findMany({
            include: {
                user: true,
            },
            orderBy: {
                time: 'desc',
            },
        });


        return NextResponse.json(deposits);
    } catch (error) {
        console.error('Error fetching and :', error);
        return NextResponse.json({ error: 'Error fetching and' }, { status: 500 });
    }
}
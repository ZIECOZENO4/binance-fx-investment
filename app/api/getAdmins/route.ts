// app/api/fetchPayments.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    try {
        const payments = await prisma.payment.findMany({
            include: {
                user: true,
            },
            orderBy: {
                time: 'desc',
            },
        });


        return NextResponse.json(payments);
    } catch (error) {
        console.error('Error fetching payments:', error);
        return NextResponse.json({ error: 'Error fetching payments' }, { status: 500 });
    }
}
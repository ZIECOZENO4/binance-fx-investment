import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    try {

        const outInvestments = await prisma.outInvest.findMany({
            where: {
                confirmed: true, 
            },
            include: {
                user: true,
            },
            orderBy: {
                time: 'desc',
            },
        });

        return NextResponse.json(outInvestments);
    } catch (error) {
        console.error('Error fetching ', error);
        return NextResponse.json({ error: 'Error fetching' }, { status: 500 });
    }
}
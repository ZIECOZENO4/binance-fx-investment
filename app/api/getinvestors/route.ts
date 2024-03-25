import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    try {
        const outInvestments = await prisma.outInvest.findMany({
            where: {
                confirmed: true, // Fetch only confirmed investments
            },
            include: {
                user: true, // Include the related user data
            },
            orderBy: {
                time: 'desc', // Order by the time field in descending order
            },
        });

        return NextResponse.json(outInvestments);
    } catch (error) {
        console.error('Error fetching confirmed investments:', error);
        return NextResponse.json({ error: 'Error fetching confirmed investments' }, { status: 500 });
    }
}
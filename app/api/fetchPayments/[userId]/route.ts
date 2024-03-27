import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    try {
        // Extract the user ID from the request query parameters
        const userId = request.nextUrl.searchParams.get("userId");

        if (!userId) {
            return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
        }
        
        const payments = await prisma.payment.findMany({
            where: {
                userId: userId,
            },
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
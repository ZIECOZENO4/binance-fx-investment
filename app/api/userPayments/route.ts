import prisma from '@/prisma/db/db';
import { getUserId } from '@/utils/auth';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    // Obtain the user ID using the getUserId() function
    const userId = getUserId();

    if (!userId) {
        // If the userId is not obtained, return a 400 response
        return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    // Fetch all payments for the user based on the provided ID
    const payments = await prisma.payment.findMany({
        where: { userId },
        include: {
            user: true,
        },
        orderBy: {
            time: 'desc',
        },
    });

    // Return the payment details in the response
    return NextResponse.json(payments);
}

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    try {
        const paymentId = request.nextUrl.searchParams.get('paymentId');
        if (!paymentId) {
            return NextResponse.json({ error: 'Payment ID is required' }, { status: 400 });
        }

        const payment = await prisma.payment.findUnique({
            where: { id: paymentId },
            include: { user: true },
        });

        if (!payment || !payment.user) {
            return NextResponse.json({ error: 'Payment not found' }, { status: 404 });
        }

        // Check if the user's balance is available and sufficient for the payment
        const paymentAmount = parseFloat(payment.amount);
        if (payment.user.balance === null || payment.user.balance < paymentAmount) {
            return NextResponse.json({ error: 'Insufficient balance or balance not available' }, { status: 400 });
        }

        await prisma.payment.update({
            where: { id: paymentId },
            data: { confirmed: true },
        });

        // Only update the user's balance if it is sufficient and not null
        const updatedUser = await prisma.user.update({
            where: { id: payment.user.id },
            data: { balance: { decrement: paymentAmount } },
        });

        console.log(`Updated balance for user ${updatedUser.id}: ${updatedUser.balance}`);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error updating payment and user balance:', error);
        return NextResponse.json({ error: 'Error updating payment and user balance' }, { status: 500 });
    }
}

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

    
        await prisma.payment.update({
            where: { id: paymentId },
            data: { confirmed: true },
        });

      
        const paymentAmount = parseFloat(payment.amount);
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
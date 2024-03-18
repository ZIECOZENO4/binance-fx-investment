// app/api/updatePayment.ts
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

        // Update the payment to set confirmed to true
        await prisma.payment.update({
            where: { id: paymentId },
            data: { confirmed: true },
        });

        console.log(`Updated payment with ID ${paymentId} to confirmed.`);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error updating payment:', error);
        return NextResponse.json({ error: 'Error updating payment' }, { status: 500 });
    }
}
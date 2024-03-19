import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    try {
        const outInvestId = request.nextUrl.searchParams.get('outInvestId');
        if (!outInvestId) {
            return NextResponse.json({ error: 'OutInvest ID is required' }, { status: 400 });
        }

        const outInvest = await prisma.outInvest.findUnique({
            where: { id: outInvestId },
            include: { user: true },
        });

        if (!outInvest || !outInvest.user) {
            return NextResponse.json({ error: 'OutInvest not found' }, { status: 404 });
        }

        // Update the outInvest to set confirmed to true
        await prisma.outInvest.update({
            where: { id: outInvestId },
            data: { confirmed: true },
        });

        // Check if outAmount is not null before parsing it
        if (outInvest.outAmount) {
            const outInvestAmount = parseFloat(outInvest.outAmount);
            const updatedUser = await prisma.user.update({
                where: { id: outInvest.user.id },
                data: { balance: { decrement: outInvestAmount } },
            });

            console.log(`Updated balance for user ${updatedUser.id}: ${updatedUser.balance}`);
        } else {
            console.error(`OutInvest with ID ${outInvestId} has a null outAmount.`);
            return NextResponse.json({ error: 'OutInvest has a null outAmount' }, { status: 400 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error updating outInvest and user balance:', error);
        return NextResponse.json({ error: 'Error updating outInvest and user balance' }, { status: 500 });
    }
}
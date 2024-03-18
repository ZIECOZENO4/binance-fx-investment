// app/api/updateBalance.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    try {
        const depositId = request.nextUrl.searchParams.get('depositId');
        if (!depositId) {
            return NextResponse.json({ error: 'Deposit ID is required' }, { status: 400 });
        }

        const deposit = await prisma.deposit.findUnique({
            where: { id: depositId },
            include: { user: true },
        });

        if (!deposit || !deposit.user) {
            return NextResponse.json({ error: 'Deposit not found' }, { status: 404 });
        }

        const updatedUser = await prisma.user.update({
            where: { id: deposit.user.id },
            data: { balance: { increment: parseFloat(deposit.depositorAmount) } },
        });

        console.log(`Updated balance for user ${updatedUser.id}: ${updatedUser.balance}`);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error updating balance:', error);
        return NextResponse.json({ error: 'Error updating balance' }, { status: 500 });
    }
}

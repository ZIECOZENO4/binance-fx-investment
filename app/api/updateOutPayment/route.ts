// app/api/updateOutInvest.ts
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

        console.log(`Updated outInvest with ID ${outInvestId} to confirmed.`);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error updating outInvest:', error);
        return NextResponse.json({ error: 'Error updating outInvest' }, { status: 500 });
    }
}

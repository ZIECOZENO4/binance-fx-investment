// app/api/getDeposits.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic'; // Force dynamic execution, bypassing cache

export async function GET(request: NextRequest) {
    try {
      const deposits = await prisma.pendingDeposit.findMany({
        orderBy: {
          time: 'desc',
        },
      });

      return NextResponse.json(deposits);
    } catch (error) {
      console.error('Error fetching deposits:', error);
      return NextResponse.json({ error: 'Error fetching deposits' }, { status: 500 });
    }
}

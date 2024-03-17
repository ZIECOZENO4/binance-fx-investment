
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers'

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    try {
   
      const withdraws = await prisma.pendingWithdraw.findMany({
        orderBy: {
          time: 'desc', 
        },
      });

      return NextResponse.json(withdraws);
    } catch (error) {
      console.error('Error fetching withdraws:', error);

      return NextResponse.json({ error: 'Error fetching withdraws' }, { status: 500 });
    }
}

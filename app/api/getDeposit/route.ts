// app/api/getDeposits.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers'
const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    try {
      // Fetch all payment records from the database, sorted by the 'time' field in descending order
      const deposits = await prisma.deposit.findMany({
        orderBy: {
          time: 'desc', // Sorting by the 'time' field in descending order
        },
      });

      // Return a 200 OK response with the deposits data
      return NextResponse.json(deposits);
    } catch (error) {
      console.error('Error fetching deposits:', error);

      // Return a 500 Internal Server Error response with an error message
      return NextResponse.json({ error: 'Error fetching deposits' }, { status: 500 });
    }
}

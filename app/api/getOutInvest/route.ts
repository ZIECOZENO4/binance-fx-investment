// app/api/getOutinvests.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    try {
      // Fetch all payment records from the database, sorted by the 'time' field in descending order
      const outInvests = await prisma.outInvest.findMany({
        orderBy: {
          time: 'desc', // Sorting by the 'time' field in descending order
        },
      });

      // Return a 200 OK response with the outinvests data
      return NextResponse.json(outInvests);
    } catch (error) {
      console.error('Error fetching outinvests:', error);

      // Return a 500 Internal Server Error response with an error message
      return NextResponse.json({ error: 'Error fetching outinvests' }, { status: 500 });
    }
}

// app/api/getWithdraws.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    try {
      // Fetch all payment records from the database, sorted by the 'time' field in descending order
      const withdraws = await prisma.withdraw.findMany({
        orderBy: {
          time: 'desc', // Sorting by the 'time' field in descending order
        },
      });

      // Return a 200 OK response with the withdraws data
      return NextResponse.json(withdraws);
    } catch (error) {
      console.error('Error fetching withdraws:', error);

      // Return a 500 Internal Server Error response with an error message
      return NextResponse.json({ error: 'Error fetching withdraws' }, { status: 500 });
    }
}

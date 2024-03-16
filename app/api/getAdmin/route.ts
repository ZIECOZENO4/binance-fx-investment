// app/api/getPayments.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers'

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    try {
      // Fetch all payment records from the database, sorted by the 'time' field in descending order
      const payments = await prisma.payment.findMany({
        orderBy: {
          time: 'desc', // Sorting by the 'time' field in descending order
        },
      });

      // Return a 200 OK response with the payments data
      return NextResponse.json(payments);
    } catch (error) {
      console.error('Error fetching payments:', error);

      // Return a 500 Internal Server Error response with an error message
      return NextResponse.json({ error: 'Error fetching payments' }, { status: 500 });
    }
}

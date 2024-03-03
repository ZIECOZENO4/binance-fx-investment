// pages/api/userBalances.ts
import { NextRequest, NextResponse } from 'next/server';
import {prisma} from '../../../prisma/db/db'; // Adjust the import path according to your setup

export async function GET(request: NextRequest): Promise<NextResponse> {
 try {
    const usersWithBalances = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        balance: true,
      },
    });
    return new NextResponse(JSON.stringify(usersWithBalances), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
 } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Failed to fetch user balances" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
 }
}

// app/api/accountbalance/route.tsx
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../prisma/db/db';

export async function GET(req: NextRequest, res: NextResponse): Promise<NextResponse> { 
   const userId = req.nextUrl.searchParams.get('userId');
  
   if (typeof userId !== 'string') {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
   }
  

 try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { balance: true },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found please retry' }, { status: 404 });
    }

    return NextResponse.json({ balance: user.balance });
 } catch (error) {
    console.error('Failed to fetch balance:', error);
    return NextResponse.json({ error: 'Failed to fetch balance' }, { status: 500 });
 }
}

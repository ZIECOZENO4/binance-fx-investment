import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const outInvestId = request.nextUrl.searchParams.get('outInvestId');
    const totalUsdtValue = request.nextUrl.searchParams.get('totalUsdtValue');

    if (!outInvestId || !totalUsdtValue) {
      return NextResponse.json({ error: 'OutInvest ID and Total USDT Value are required' }, { status: 400 });
    }

    const outInvest = await prisma.outInvest.findUnique({
      where: { id: outInvestId },
      include: { user: true },
    });

    if (!outInvest || !outInvest.user) {
      return NextResponse.json({ error: 'OutInvest not found' }, { status: 404 });
    }

   
    await prisma.outInvest.update({
      where: { id: outInvestId },
      data: { confirmed: true, totalValueInUSDT: totalUsdtValue },
    });


    if (outInvest.outAmount) {
      const outInvestAmount = parseFloat(outInvest.outAmount);
      const totalUsdtValueFloat = parseFloat(totalUsdtValue);

      
      const updatedUser = await prisma.user.update({
        where: { id: outInvest.user.id },
        data: { balance: { decrement: totalUsdtValueFloat } },
      });

      console.log(`Updated balance for user ${updatedUser.id}: ${updatedUser.balance}`);

      // Check if the user has the outCoin in their userCoinAmounts
      const userCoinAmount = await prisma.userCoinAmount.findFirst({
        where: {
          userId: outInvest.user.id,
          coin: { symbol: outInvest.outCoin ?? undefined },
        },
      });

      if (userCoinAmount) {
        // If the user has the outCoin, subtract the outAmount from the user's coin amount
        await prisma.userCoinAmount.update({
          where: { id: userCoinAmount.id },
          data: { amount: { decrement: outInvestAmount } },
        });
      }
    } else {
      console.error(`OutInvest with ID ${outInvestId} has a null outAmount.`);
      return NextResponse.json({ error: 'OutInvest has a null outAmount' }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating outInvest and user balance:', error);
    return NextResponse.json({ error: 'Error updating outInvest and user balance' }, { status: 500 });
  }
}

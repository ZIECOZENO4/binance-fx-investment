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

    if (outInvest.outAmount && outInvest.outCoin) {
      const outInvestAmount = parseFloat(outInvest.outAmount);
      const totalUsdtValueFloat = parseFloat(totalUsdtValue);

      const updatedUser = await prisma.user.update({
        where: { id: outInvest.user.id },
        data: { balance: { decrement: totalUsdtValueFloat } },
      });

      console.log(`Updated balance for user ${updatedUser.id}: ${updatedUser.balance}`);

      // Check if the user has the outCoin in their UserCoin
      const userCoin = await prisma.userCoin.findUnique({
        where: {
          userId_coinId: {
            userId: outInvest.user.id,
            coinId: outInvest.outCoin,
          },
        },
      });

      if (userCoin) {
        await prisma.userCoin.update({
          where: {
            userId_coinId: {
              userId: outInvest.user.id,
              coinId: outInvest.outCoin,
            },
          },
          data: { amount: { decrement: outInvestAmount } },
        });
      }
    } else {
      console.error(`OutInvest with ID ${outInvestId} has a null outAmount or outCoin.`);
      return NextResponse.json({ error: 'OutInvest has a null outAmount or outCoin' }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating outInvest and user balance:', error);
    return NextResponse.json({ error: 'Error updating outInvest and user balance' }, { status: 500 });
  }
}

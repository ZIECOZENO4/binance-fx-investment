// app/api/fetchAndUpdateCoins.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
 const coins = ['bitcoin', 'ethereum', 'tether', 'binancecoin', 'solana', 'ripple', 'usd-coin', 'lido', 'cardano', 'avalanche-2', 'tron', 'dogecoin'];

 try {
    // Fetch coin data from CoinGecko
    const coinData = await Promise.all(
      coins.map(async (coin) => {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`);
        return response.data;
      })
    );

    // Store coin data in the database
    const storedCoins = await Promise.all(
      coinData.map(async (coin) => {
        return await prisma.customCoin.create({
          data: {
            name: coin.name,
            imageUrl: coin.image.large,
            usdValue: coin.market_data.current_price.usd,
            rank: coin.market_cap_rank,
            userId: request.user.id, 
          },
        });
      })
    );

    return NextResponse.json(storedCoins);
 } catch (error) {
    console.error('Error fetching and storing coin data:', error);
    return NextResponse.json({ error: 'Error fetching and storing coin data' }, { status: 500 });
 }
}
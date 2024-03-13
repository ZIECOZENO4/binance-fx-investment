// app/api/sendToAdmin.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    // Extract the request body
    const body = await request.json();

    // Destructure the expected fields from the request body
    const { amount, coin, plan, planId, time, user, balance, gasFee, userId } = body;

    // Process the data as needed, e.g., save it to a database, send an email, etc.
    console.log({ amount, coin, plan, planId, time, user, balance, gasFee, userId });

    // Return a 200 OK response with a success message
    return NextResponse.json({ message: 'Data received successfully', amount, coin, plan, planId, time, user, balance, gasFee, userId  });
}

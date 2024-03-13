// app/api/sendToAdmin.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 if (req.method === 'POST') {
    const { amount, coin, plan, planId, time, user, balance, gasFee, userId } = req.body;

    // Process the data as needed, e.g., save it to a database, send an email, etc.
    console.log({ amount, coin, plan, planId, time, user, balance, gasFee, userId });

    res.status(200).json({ message: 'Data received successfully' });
 } else {
    res.status(405).json({ message: 'Method not allowed' });
 }
}
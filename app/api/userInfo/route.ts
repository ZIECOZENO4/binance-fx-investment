<<<<<<< HEAD
=======
// Assuming this file is located at /pages/api/user/[id].ts
// Import the Prisma client instance
// Import types from 'next'
>>>>>>> c45e6e773f58bb64d9bcf080b739e8dee477bd9e
import prisma from '@/prisma/db/db';
import { getUserId } from '@/utils/auth';
import { NextRequest, NextResponse } from 'next/server';

// This function simulates the getUserId() function you mentioned.
// You'll need to replace this with your actual getUserId() implementation.


export async function GET(request: NextRequest) {
    // Obtain the user ID using the getUserId() function
    const userId = getUserId();

    if (!userId) {
        // If the userId is not obtained, return a 400 response
        return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    // Fetch all information about the user based on the provided ID
    const user = await prisma.user.findUnique({
        where: { id: userId },
    });

    if (!user) {
        // If the user is not found, return a 404 response
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return all the user's information in the response
    return NextResponse.json(user);
<<<<<<< HEAD
}
=======
}
>>>>>>> c45e6e773f58bb64d9bcf080b739e8dee477bd9e

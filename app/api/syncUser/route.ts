import { prisma } from "../../../prisma/db/db"
import { tokenKeeperSchema } from "../../../prisma/zod/tokenkeeper";
import { z } from "zod";
import { NextRequest, NextResponse } from 'next/server'
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { createUser } from "../../../components/createuser/createuser";

type ResponseType = z.infer<typeof tokenKeeperSchema> | { error: string };

export async function POST(request: NextRequest, res: NextResponse): Promise<NextResponse> {
    console.log("POST function started");

    try {
        console.log("Attempting to authenticate user");
        const { userId } = auth();
        console.log(`Authenticated user ID: ${userId}`);
        if (!userId) {
            console.log("No user ID found, redirecting to sign-in");
            throw new Error("No user ID found, redirecting to sign-in page.");
        }
        console.log("Fetching user from database");
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });
        console.log(`User fetched from database: ${JSON.stringify(user)}`);
        if (user) {
            console.log("User found, redirecting to user-dashboard");
            return NextResponse.json(user, { status: 200 })

        }
        console.log("Creating user through webhook");
        const fromSyncingUser = await createUser();
        console.log(`User created: ${JSON.stringify(fromSyncingUser)}`);
        console.log("Returning response with status 200");
        return NextResponse.json(fromSyncingUser, { status: 200 })
    } catch (error: unknown) {
        console.log("An error occurred", error);
        // Convert the error object to a string
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.log(`Error message: ${errorMessage}`);

        console.log("Returning error response with status 500");
        return NextResponse.json({ error: 'An unknown error occurred while updating the token price: ' + errorMessage }, { status: 500 })
    }
}
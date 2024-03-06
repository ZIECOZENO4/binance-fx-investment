import { auth } from "@clerk/nextjs"

export const getUserId = () => {
    const { userId } = auth();
    if (!userId) throw new Error("No User ID found");
    return userId;
}
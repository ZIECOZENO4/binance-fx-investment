import prisma from "../../../prisma/db/db";


export async function GET(request: Request, {params}:{params:{id:number}}) {
    // Fetch the user's balance based on the provided ID
    const user = await prisma.user.findUnique({
        where: { id: params.id.toString() },
        select: {
            balance: true,
        },
    });

    if (!user) {
        // If the user is not found, return a 404 response
        return new Response("User not found", { status: 404 });
    }

    // Return the user's balance in the response
    return new Response(JSON.stringify({ balance: user.balance }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

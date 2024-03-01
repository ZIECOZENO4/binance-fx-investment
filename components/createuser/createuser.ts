import { prisma } from "../../prisma/db/db";
import { currentUser } from "@clerk/nextjs";
import { EmailAddress } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

function getPrimaryEmail(emails: EmailAddress[], primaryId: string | null): string {
    const primaryEmail = emails.find(email => email.id === primaryId);
    return primaryEmail ? primaryEmail.emailAddress : '';
}

export async function createUser() {
    try {
        const session = await currentUser();
        if (!session) {
            redirect("/sign-in");
        }
        const data = session;
        const primaryEmail = getPrimaryEmail(data.emailAddresses, data.primaryEmailAddressId);

        let user = await prisma.user.findUnique({
            where: { email: primaryEmail },
        });

        if (user && user.id !== data.id) {
            user = await prisma.user.update({
                where: { email: primaryEmail },
                data: {
                    id: data.id,
                    name: `${data.firstName} ${data.lastName}`,
                    email: primaryEmail,
                    image: data.imageUrl,
                    updatedAt: new Date(data.updatedAt),
                },
            });

            await updateRelatedModels(user.id, data.id);
        } else if (!user) {
            user = await prisma.user.create({
                data: {
                    id: data.id,
                    name: `${data.firstName} ${data.lastName}`,
                    email: primaryEmail,
                    image: data.imageUrl,
                    updatedAt: new Date(data.updatedAt),
                },
            });
        }

        return user;
    } catch (error) {
        console.error("Failed to create or update user:", error);
        // Optionally, redirect to an error page or return a specific error response
        return null;
    }
}

async function updateRelatedModels(oldUserId: string, newUserId: string) {
    await prisma.p2PTransaction.updateMany({
        where: { userId: oldUserId },
        data: { userId: newUserId },
    });

    await prisma.mockTransfer.updateMany({
        where: { userId: oldUserId },
        data: { userId: newUserId },
    });

    await prisma.transaction.updateMany({
        where: { userId: oldUserId },
        data: { userId: newUserId },
    });
    // Handle the error appropriately
}

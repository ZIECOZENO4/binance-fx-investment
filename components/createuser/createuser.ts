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


            // Assuming updateRelatedModels is a function that updates related models
            // If it's not defined, you need to define it or remove this line
            // await updateRelatedModels(user.id, userId);
    
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

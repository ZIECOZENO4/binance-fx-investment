// prisma/zod/tokenkeeper.ts

import { z } from 'zod';

export const tokenKeeperSchema = z.object({
 // Define the shape of your token keeper schema here
 // For example:
 tokenId: z.string(),
 tokenName: z.string(),
 tokenPrice: z.number(),
 // Add other fields as needed
});
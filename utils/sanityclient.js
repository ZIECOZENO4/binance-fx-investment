
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  apiVersion: process.env.SANITY_API_VERSION,
  useCdn: false,
});

import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string
const apiVersion = "2021-03-25";

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
});

export default client;

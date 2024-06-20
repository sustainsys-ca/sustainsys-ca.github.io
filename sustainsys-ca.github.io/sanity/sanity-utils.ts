import { createClient, groq } from "next-sanity";
import { Collaborator } from "../types/Collaborator";
import clientConfig from './config/client-config'

export async function getCollaborators() : Promise<Collaborator[]> {
    const client = createClient(clientConfig);
    return client.fetch(
        groq`*[_type == "collaborator"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        university,
        linkedin
        }`
    )
}
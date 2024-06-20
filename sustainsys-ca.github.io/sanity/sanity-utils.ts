import { createClient, groq } from "next-sanity";

export async function getCollaborators() {
    const client = createClient({
        projectId: "k9s7zkou",
        dataset: "production",
        apiVersion: "2024-06-08",
    });
    console.log("hi")
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
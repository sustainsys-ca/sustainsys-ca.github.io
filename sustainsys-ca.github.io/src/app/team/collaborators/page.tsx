import TeamCard from "../teamcard"
import { getCollaborators } from "../../../../sanity/sanity-utils"

export default async function Collaborators() {
    const collaborators = await getCollaborators();
    // const collaborators = {
    //     name: 'Collaborators',
    //     description: 'Collaborators are people who have contributed to the project in some way, but are not part of the core team. They may have contributed code, documentation, or other resources.',
    //     members: [
    //         {
    //             name: 'Oana Balmau',
    //             university: 'McGill University',
    //             image: '/oanabalmau.jpeg',
    //             linkedin: 'https://www.linkedin.com/in/oanabalmau/'
    //         },
    //         {
    //             name: 'John Doe',
    //             university: 'McGill University',
    //             image: '/images.png',
    //             linkedin: 'https://www.linkedin.com/in/oanabalmau/'
    //         }
    //     ]
    // }
    return (
        <div className="mx-8 my-5">
            <h1 className="text-3xl font-bold mb-4">Collaborators</h1>
            <p className="mb-8">Collaborators are people who have contributed to the project in some way, but are not part of the core team. They may have contributed code, documentation, or other resources.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {collaborators.map((member) => {
                    console.log(member.name)
                    return (
                        <TeamCard 
                            key={member._id}
                            name={member.name} 
                            university={member.university} 
                            image={member.image} 
                            linkedin={member.linkedin}
                        />
                    )   
                })}
            </div>
        </div>
    )
}

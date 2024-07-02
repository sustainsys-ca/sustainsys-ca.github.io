import TeamCard from "../teamcard"
import { getCollaborators } from "../../../../sanity/sanity-utils"
import academicCollaborators from "../../../../AllMembers/academicCollaborators"
import industrialCollaborators from "../../../../AllMembers/IndustrialCollaborators"
import Image from "next/image"

export default async function Collaborators() {

    // ---Sanity code---
    // const collaborators = await getCollaborators();
    // ---Sanity code---

    return (
        <div className="mx-8 my-5">
            <h1 className="text-3xl font-bold mb-4">
                Academic Collaborators
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {academicCollaborators.members.map((member) => {
                    return (
                        <TeamCard 
                            key={member.name}
                            name={member.name} 
                            university={member.university} 
                            image={member.image} 
                            linkedin={member.linkedin}
                        />
                    )   
                })}
            </div>
            <h1 className="text-3xl font-bold mb-4 pt-24">
                Industrial Collaborators
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {industrialCollaborators.members.map((member) => {
                    return (
                        <Image
                            src= {member.image}
                            alt={member.name} 
                            width={200}
                            height={200}
                        />
                    )   
                })}
            </div>
        </div>
    )
}

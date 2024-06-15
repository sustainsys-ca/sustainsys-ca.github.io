import TeamCard from "../teamcard"

export default function Collaborators() {
    const collaborators = {
        name: 'Collaborators',
        description: 'Collaborators are people who have contributed to the project in some way, but are not part of the core team. They may have contributed code, documentation, or other resources.',
        members: [
            {
                name: 'Oana Balmau',
                university: 'McGill University',
                image: '/oanabalmau.jpeg',
            },
        ]
    }
    return (
        <div>
            {collaborators.members.map((member) => {
                return (
                    <TeamCard 
                    key={member.name}
                    name={member.name} 
                    university={member.university} 
                    image={member.image} 
                    />
                )   
            })}
        </div>
    )
}
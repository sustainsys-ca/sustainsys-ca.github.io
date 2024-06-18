import TeamCard from "../teamcard"
export default function Coapplicants() {
    const coapplicants = {
        name: 'Coapplicants',
        description: '',
        members: [
            {
                name: 'Oana Balmau',
                university: 'McGill University',
                image: '/oanabalmau.jpeg',
                linkedin: 'https://www.linkedin.com/in/oanabalmau/'
            },
            {
                name: 'John Doe',
                university: 'McGill University',
                image: '/images.png',
                linkedin: 'https://www.linkedin.com/in/oanabalmau/'
            },
        ]
    }
    return (
        <div className="flex flex-row space-x-10 mx-8 my-11">
            {coapplicants.members.map((member) => {
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
    )
}

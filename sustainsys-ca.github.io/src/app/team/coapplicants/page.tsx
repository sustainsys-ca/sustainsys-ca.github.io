import TeamCard from "../teamcard";

export default function Coapplicants() {
    const coapplicants = {
        name: 'Coapplicants',
        description: '',
        members: [
            {
                name: 'Essam Mansour',
                university: 'Concordia University',
                image: '/essammansour.jpeg',
                linkedin: 'https://www.linkedin.com/in/emansour/'
            },
            {
                name: 'Hans-Arno Jacobsen',
                university: 'University of Toronto',
                image: '/arnojacobsen.jpeg',
                linkedin: 'https://www.linkedin.com/in/arno-jacobsen/?originalSubdomain=ca'
            },
            {
                name: 'Natalie Enright Jerger',
                university: 'University of Toronto',
                image: '/NatalieEnrightJerger.jpeg',
                linkedin: 'https://www.linkedin.com/in/natalie-enright-jerger-7193a54/'
            },
            {
                name: 'Oana Balmau',
                university: 'McGill University',
                image: '/oanabalmau.jpeg',
                linkedin: 'https://www.linkedin.com/in/oanabalmau/'
            },
            {
                name: 'Semih Salihoglu',
                university: 'University of Waterloo',
                image: '/semihsalihoglu.jpeg',
                linkedin: 'https://www.linkedin.com/in/semih-saliho%C4%9Flu-0512612a/'
            },
        ]
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 mx-8 my-5">
                Core Faculty Team
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-8 my-11">
                {coapplicants.members.map((member) => {
                    return (
                        <TeamCard 
                            key={member.name}
                            name={member.name} 
                            university={member.university} 
                            image={member.image} 
                            linkedin={member.linkedin}
                        />
                    );
                })}
            </div>
        </div>
    );
}

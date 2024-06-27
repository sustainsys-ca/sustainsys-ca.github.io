import TeamCard from "../teamcard"
import { getCollaborators } from "../../../../sanity/sanity-utils"

export default async function Collaborators() {

    // ---Sanity code---
    // const collaborators = await getCollaborators();
    // ---Sanity code---

    const academicCollaborators = {
        name: 'Collaborators',
        description: 'Collaborators are people who have contributed to the project in some way, but are not part of the core team. They may have contributed code, documentation, or other resources.',
        members: [
            {
                name: 'Alain Tchana',
                university: 'Grenoble Alpres University',
                image: '/alaintchana.jpeg',
                linkedin: 'https://www.linkedin.com/in/pr-alain-tchana-72516722/?originalSubdomain=fr'
            },
            {
                name: 'Doina Precup',
                university: 'University of McGill',
                image: '/doinaprecup.jpeg',
                linkedin: 'https://www.linkedin.com/in/doina-precup-1ba61314/'
            },
            {
                name: 'Khuzaima Daudjee',
                university: 'University of Waterloo',
                image: '/khuzaimadaudjee.jpeg',
                linkedin: 'https://www.linkedin.com/in/khuzaima-daudjee-4bb15bbb/'
            },
            {
                name: 'Reihaneh Rabbany',
                university: 'University of McGill',
                image: '/reihanehrabbany.jpeg',
                linkedin: 'https://www.linkedin.com/in/reihaneh-rabbany/'
            },
            {
                name: 'Sabita Maharjan',
                university: 'University of Oslo',
                image: '/sabitamaharjan.jpeg',
                linkedin: 'https://www.linkedin.com/in/sabita-maharjan-965b1b29/'
            },
            {
                name: 'Sujaya Maiyya',
                university: 'University of Waterloo',
                image: '/sujayamaiyya.jpeg',
                linkedin: 'https://www.linkedin.com/in/sujaya-maiyya/'
            },
            {
                name: 'Tilmann Rabl',
                university: 'University of Potsdam',
                image: '/tilmannrabl.jpeg',
                linkedin: 'https://www.linkedin.com/in/tilmann-rabl-4129a458/'
            },
            {
                name: 'Xue Liu',
                university: 'McGill University',
                image: '/xueliu.jpg',
                linkedin: 'https://www.linkedin.com/in/xueliu/'
            }
        ]
    }
    const industrialCollaborators = {
        name: 'Collaborators',
        description: 'Collaborators are people who have contributed to the project in some way, but are not part of the core team. They may have contributed code, documentation, or other resources.',
        members: [
            {
                name: 'Arik Brutian',
                university: 'Morningstar Sustainalytics',
                image: '/arabrutian.jpeg',
                linkedin: 'https://www.linkedin.com/in/arik-brutian/?originalSubdomain=ca'
            },
            {
                name: 'Anil Goel',
                university: 'SAP',
                image: '/anilgoel.jpeg',
                linkedin: 'https://www.linkedin.com/in/anilkgoel/'
            },
            {
                name: 'David Kanter',
                university: 'MLCommons',
                image: '/davidkanter.jpeg',
                linkedin: 'https://www.linkedin.com/in/kanterd/'
            },
            {
                name: 'Debojyoti Dutta',
                university: 'Nutanix Inc.',
                image: '/debodutta.jpeg',
                linkedin: 'https://www.linkedin.com/in/dedutta/'
            },
            {
                name: 'Eirene Seiradaki',
                university: 'Borealis AI',
                image: '/eireneseiradaki.jpeg',
                linkedin: 'https://www.linkedin.com/in/eirenes/'
            },
            {
                name: 'Marzieh Zare',
                university: 'Dreeven Technologies',
                image: '/marziehzare.jpeg',
                linkedin: 'https://www.linkedin.com/in/marziehzare/?originalSubdomain=ca'
            },  
            {
                name: 'Joao Tiago Paulo',
                university: 'INESC',
                image: '/joaopaulo.jpeg',
                linkedin: 'https://www.linkedin.com/in/jtpaulo/?originalSubdomain=pt'
            },
            {
                name: 'Julien Crowe',
                university: 'National Bank of Canada',
                image: '/juliencrowe.jpeg',
                linkedin: 'https://www.linkedin.com/in/juliencrowe/'
            },
            {
                name: 'Pierre Dumouchel',
                university: 'IVADO',
                image: '/pierredumouchel.jpeg',
                linkedin: 'https://www.linkedin.com/in/pierre-dumouchel-472110/?originalSubdomain=ca'
            },
            {
                name: 'Ricardo Macedo',
                university: 'INESC',
                image: '/ricardomacedo.jpeg',
                linkedin: 'https://www.linkedin.com/in/ricardo-macedo-651947109/'
            },
            {
                name: 'Sasha Luccioni',
                university: 'Hugging Face',
                image: '/sashaluccioni.jpeg',
                linkedin: 'https://www.linkedin.com/in/sashaluccioniphd/'
            },
        ]
    }
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
        </div>
    )
}

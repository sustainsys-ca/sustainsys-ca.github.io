import TeamCard from "../teamcard";
import coFacultyMembers from "../../../../AllMembers/cofacultymembers";

export default function coreTeam() {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-8 my-11">
                <div>
                    <h1 className="text-3xl font-bold text-center text-everglade">
                        Director
                    </h1>
                    <TeamCard 
                    key="Bettina Kemme"
                    name="Bettina Kemme"
                    university="McGill University"
                    image="/coreteam/bettinakemme.jpeg"
                    linkedin="https://www.linkedin.com/in/bettina-kemme-63115b47/"
                    />
                </div>
            </div>
            <h1 className="text-3xl font-bold mb-4 mx-8 my-5">
                Core Faculty Team
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-8 my-11">
                {coFacultyMembers.members.map((member) => {
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-8 my-11">
                <div>
                    <h1 className="text-3xl font-bold text-center text-everglade">
                        Co-Administrative Coordinator
                    </h1>
                    <TeamCard 
                    key=""
                    name=""
                    university=""
                    image=""
                    linkedin=""
                    />
                </div>
            </div>
        </div>
    )
}
import TeamCard from "../teamcard";
import graduateStudents from "../../../../AllMembers/graduateStudents";
import postDocs from "../../../../AllMembers/postDocs";
import alumni from "../../../../AllMembers/alumni";

export default function Trainees() {

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 mx-8 my-5">
                Graduate Students
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-8 my-11">
                {graduateStudents.members.map((member) => {
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
            <h1 className="text-3xl font-bold mb-4 mx-8 my-5">
                Post-Docs
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-8 my-11">
                {postDocs.members.map((member) => {
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
            <h1 className="text-3xl font-bold mb-4 mx-8 my-5">
                Alumni
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-8 my-11">
                {alumni.members.map((member) => {
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

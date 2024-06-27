import TeamCard from "../teamcard";

export default function coreTeam() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-8 my-11">
                <TeamCard 
                key="Bettina Kemme"
                name="Bettina Kemme"
                university="McGill University"
                image="/bettinakemme.jpeg"
                linkedin="https://www.linkedin.com/in/bettina-kemme-63115b47/"
                />
            </div>
    )
}
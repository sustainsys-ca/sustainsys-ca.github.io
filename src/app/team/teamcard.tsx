import Image from 'next/image';

interface TeamCardProps {
    name: string;
    university: string;
    image: string;
    linkedin: string;
}

export default function TeamCard({ name, university, image, linkedin }: TeamCardProps) {
    return (
        <div className="team-card text-center rounded-md border border-gray-300 shadow-lg p-4 space-y-3">
            <Image 
                src={image} 
                alt={name} 
                height={300}
                width={300}
                className="rounded-md mx-auto"
            />
            <div className="bg-white p-4 rounded-md">
                <h3  className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-600">{university}</p>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
                    <Image 
                        src="/linkedin.svg" 
                        alt="LinkedIn" 
                        height={23}
                        width={23}
                        className="p-1 hover:bg-gray-200 hover:rounded-md"
                    />
                </a>
            </div>
        </div>    
    );
}

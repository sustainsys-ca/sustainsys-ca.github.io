import Image from 'next/image';

interface TeamCardProps {
    name: string;
    university: string;
    image: string;
}

export default function TeamCard({ name, university, image }: TeamCardProps) {
    return (
        <div>
            <div className="Container">
                <Image 
                src={image} 
                alt={name} 
                height={200}
                width={200}
                />
                <h3>{name}</h3>
                <p>{university}</p>
            </div>
        </div>
    );
}

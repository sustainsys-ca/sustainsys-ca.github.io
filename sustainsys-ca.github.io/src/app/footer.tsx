import Link from "next/link";
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-mikado rounded-sm py-6">
            <div className="container mx-auto flex flex-wrap justify-evenly">
                <div className="flex flex-col items-center space-y-3">
                    <h2 className="font-bold mb-2">Partner Universities</h2>
                    <a href="https://www.mcgill.ca/" target="_blank" className="text-blue-600 hover:underline">McGill University</a>
                    <a href="https://www.concordia.ca/" target="_blank" className="text-blue-600 hover:underline">Concordia University</a>
                    <a href="https://uwaterloo.ca/" target="_blank" className="text-blue-600 hover:underline">University of Waterloo</a>
                    <a href="https://www.utoronto.ca/" target="_blank" className="text-blue-600 hover:underline">University of Toronto</a>
                </div>
                <div className="flex flex-col items-center mb-4">
                    <h2 className="font-bold mb-2">More</h2>
                    <a href="#" className="text-blue-600 hover:underline">Github</a>
                </div>
            </div>
            <Image
                src="/NSERC_WHITE.png"
                width={250}
                height={250}
                className="mx-auto mt-5 mb-4"
                alt="NSERC CRSNG"
            />
            <p className="text-center">
                We acknowledge the support of the Natural Sciences and Engineering Research Council of Canada (NSERC).
            </p>
        </footer>
    );
}

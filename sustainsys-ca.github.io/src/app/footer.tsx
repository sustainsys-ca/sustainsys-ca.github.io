import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-mikado rounded-sm py-6">
            <div className="container mx-auto flex flex-wrap justify-evenly">
                <div className="flex flex-col items-center mb-4">
                    <h2 className="font-bold mb-2">Partner Universities</h2>
                    <a href="https://www.mcgill.ca/" target="_blank" className="text-blue-600 hover:underline">McGill University</a>
                </div>
                <div className="flex flex-col items-center mb-4">
                    <h2 className="font-bold mb-2">Program</h2>
                    <Link href="#">
                        <span className="text-blue-600 hover:underline">Introduction</span>
                    </Link>
                </div>
                <div className="flex flex-col items-center mb-4">
                    <h2 className="font-bold mb-2">Community</h2>
                    <Link href="#">
                        <span className="text-blue-600 hover:underline">Team</span>
                    </Link>
                </div>
                <div className="flex flex-col items-center mb-4">
                    <h2 className="font-bold mb-2">More</h2>
                    <a href="#" className="text-blue-600 hover:underline">Github</a>
                </div>
            </div>
        </footer>
    );
}

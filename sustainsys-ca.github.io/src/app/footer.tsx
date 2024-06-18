import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <footer className="rounded-sm flex flex-row justify-evenly bg-mikado">
                <div id="Partner Universities" className="flex flex-col">
                    <h1 className="font-bold">Partner Universities</h1>
                    <Link href={"https://www.mcgill.ca/"} target="_blank">McGill University</Link>
                </div>
                <div id="Program" className="flex flex-col">
                    <h1 className="font-bold">Program</h1>
                    <a>Introduction</a>
                </div>
                <div id="Community" className="flex flex-col">
                    <h1 className="font-bold">Community</h1>
                    <a>Team</a>
                </div>
                <div id="More" className="flex flex-col">
                    <h1 className="font-bold">More</h1>
                    <a href="">Github</a>
                </div>
            </footer>
        </div>
    )
}
'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();
    return (
        <div className="w-1/5 h-screen bg-everglade p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Sections</h2>
            <ul className="space-y-2 pl-3 text-xl">
                <li>
                    <Link href="/about" className="text-sm">
                        Introduction
                    </Link>
                </li>
                <li>
                    <Link href="/about/courseWork" className="text-sm">
                        Course Work
                    </Link>
                </li>
                <li>
                    <Link href="/about/workshops" className="text-sm">
                        Workshops and Summer School
                    </Link>
                </li>
                <li>
                    <Link href="/about/skills" className="text-sm">
                        Advanced Skills Training
                    </Link>
                </li>
            </ul>
        </div>
    );
}

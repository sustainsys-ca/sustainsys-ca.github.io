'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image'

export default function Navbar() {
    const pathname = usePathname();
    return (
        <header className="flex items-center py-2 px-4 lg:px-8 bg-mikado border-b border-everglade">
            <Link href="/" className="flex items-center text-2xl font-bold bg-gradient-to-r from-everglade to-lightgreen bg-clip-text text-transparent mr-6">
                <Image
                    src="/Logo.jpeg"
                    width={50}
                    height={50}
                    alt="SustainSys Logo"
                    className="mr-2"
                />
                SustainSys
            </Link>
            <nav className="flex items-center space-x-6">
                <Link href="/about" className={`text-lg ${pathname.includes('/about') ? 'border-b-2 border-black' : 'hover:text-lightgreen'}`}>
                    About
                </Link>
                <Link href="/events" className={`text-lg ${pathname === '/events' ? 'border-b-2 border-black' : 'hover:text-lightgreen'}`}>
                    Events
                </Link>
                <div className="relative group">
                    <button className={`flex items-center text-lg ${pathname.includes('/team') ? 'border-b-2 border-black' : 'hover:text-lightgreen'}`}>
                        Team
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-1 h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    <div className="invisible absolute z-50 mt-1 flex flex-col space-y-1 bg-white rounded-lg shadow-lg opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200">
                        <Link href="/team/coreTeam" className="block py-2 px-4 hover:bg-gray-100 rounded-t-lg">
                            Core Team
                        </Link>
                        <Link href="/team/trainees" className="block py-2 px-4 hover:bg-gray-100">
                            Trainees
                        </Link>
                        <Link href="/team/collaborators" className="block py-2 px-4 hover:bg-gray-100 rounded-b-lg">
                            Collaborators
                        </Link>
                    </div>
                </div>
                <Link href="/apply" className={`text-lg ${pathname === '/apply' ? 'border-b-2 border-black' : 'hover:text-lightgreen'}`}>
                    Apply
                </Link>
            </nav>
        </header>
    )
}

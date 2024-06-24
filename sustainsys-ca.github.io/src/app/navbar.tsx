'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image'

export default function Navbar() {
    const pathname = usePathname();
    return (
        <div>
            <header className="flex flex-row py-1 border-b border-slate-900/10 lg:px-8 dark:border-slate-300/10 mx-4 lg:mx-0 space-x-3 sticky top-0 bg-white dark:bg-gray-800">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="flex items-center text-xl font-bold bg-gradient-to-r from-everglade to-lightgreen bg-clip-text text-transparent">
                        <Image
                            src="/Logo.jpeg"
                            width={50}
                            height={50}
                            alt="SustainSys Logo"
                            className="flex"
                        />
                        SustainSys
                    </Link>
                    <Link href="/about" className={`text-xl ${pathname === '/about' ? 'border-b-2 border-black' : 'hover:border-black border-b-2 border-b-transparent'}`}>
                        About
                    </Link>
                    <Link href="/events" className={`text-xl ${pathname === '/events' ? 'border-b-2 border-black' : 'hover:border-black border-b-2 border-b-transparent'}`}>
                        Events
                    </Link>
                    
                    <div className="relative group">
                        <button className={`flex items-center text-xl ${pathname.includes('/team') ? 'border-b-2 border-black' : 'hover:border-black border-b-2 border-b-transparent'}`}>
                            Team
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-1 h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        <div className="invisible absolute z-50 flex flex-col group-hover:visible group-hover:opacity-100 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 transition-opacity duration-200 w-max">
                            <Link href="/team/coapplicants" className="my-2 block py-1 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                                Co-Applicants
                            </Link>
                            <Link href="/team/collaborators" className="my-2 block py-1 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                                Collaborators
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
    const pathname = usePathname();
    return (
        <div>
            <header className="py-4 border-b border-slate-900/10 lg:px-8 dark:border-slate-300/10 mx-4 lg:mx-0 space-x-3">
            <Link href="/"
                  className="text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                  SustainSys
            </Link>
            <Link href="/about"
                  className={`text-xl ${pathname === '/about' ? 'border-b-2 border-blue-600/30' : 'hover:border-blue-600 border-b-2 border-b-white rounded-sm'}`}>
                  About
            </Link>
            <Link href="/events"
                  className={`text-xl ${pathname === '/events' ? 'border-b-2 border-blue-600/30' : 'hover:border-blue-600 border-b-2 border-b-white rounded-sm'}`}>
                  Events
            </Link>
            <Link href="/team"
                  className={`text-xl ${pathname === '/team' ? 'border-b-2 border-blue-600/30' : 'hover:border-blue-600 border-b-2 border-b-white rounded-sm'}`}>
                  Team
            </Link>
          </header>
        </div>
    )
}
'use client';
import Image from "next/image";
import Introduction from "./Components/introduction";
import CourseWork from "./Components/courseWork";
import Workshops from "./Components/workshops";
import Skills from "./Components/skills";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div id="Container" className="min-h-screen flex flex-col">
      <header className="About-Container flex flex-col items-center justify-center bg-mikado w-full h-3/4 border-b-4 border-everglade/50 p-4 pt-11">
        <Image
          src="/Logo.jpeg"
          width={200}
          height={200}
          alt="Picture of the author"
          className="mb-4 mt-6"
        />
        <div className="text-container text-center mb-11 mt-11">
          <p className="lg:text-3xl mb-2 font-bold sm:text-lg">
            <span className="text-everglade lg:text-3xl mb-2 font-bold sm:text-lg inline mr-2">
              Sustainable
            </span>
            Data Systems for Data Science (SDSDS) CREATE
          </p>
          <motion.button
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className="py-2 px-4 bg-everglade text-white font-semibold rounded-lg shadow-md hover:bg-lightgreen focus:outline-none focus:ring-2 focus:ring-lightgreen focus:ring-opacity-75"
          > 
          <Link href="/apply">
              Apply!
            </Link>
          </motion.button>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center">
        <Introduction />
        <CourseWork />
        <Workshops />
        <Skills />
      </main>
    </div>
  );
}

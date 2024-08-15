'use client';
import Image from "next/image";
import Introduction from "./Components/introduction";
import CourseWork from "./Components/courseWork";
import Workshops from "./Components/workshops";
import Skills from "./Components/skills";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollToTopButton from "./Components/topButton";

export default function Home() {
  return (
    <div id="Container" className="min-h-screen flex flex-col font-roboto">
      <header className="About-Container flex flex-col items-center justify-center w-full h-3/4 border-b-4 border-everglade/50 p-4 pt-11 bg-mikado">
        <Image
          src="/Logo.jpeg"
          width={200}
          height={200}
          alt="Picture of the author"
          className="mt-6"
        />
        <div className="text-container text-center mb-11 mt-11">
          <span className="text-5xl font-bold mb-11 bg-gradient-to-t from-everglade to-black bg-clip-text text-transparent">
            SustainSys
          </span>
          <p className="lg:text-3xl mb-2 font-bold sm:text-lg mt-11">
            <span className="text-everglade lg:text-3xl mb-2 font-bold sm:text-lg inline mr-2">
              Sustainable
            </span>
            able Data 
            <span className="text-everglade lg:text-3xl mb-2 font-bold sm:text-lg inline mr-2">
              Sys
            </span>
            tems for Data Science (SDSDS) CREATE
          </p>
          {/* <motion.button
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
          </motion.button> */}
        </div>
      </header>

      <main className="flex flex-col items-center justify-center" id="About">
        <Introduction />
        <CourseWork />
        <Workshops />
        <Skills />
      </main>
      <ScrollToTopButton/>
    </div>
  );
}

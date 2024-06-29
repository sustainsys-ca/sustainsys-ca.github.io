import Image from "next/image";
import Introduction from "./Components/introduction";
import CourseWork from "./Components/courseWork";
import Workshops from "./Components/workshops";
import Skills from "./Components/skills";

export default function Home() {
  return (
    <div id="Container" className="min-h-screen flex flex-col">
      <header className="About-Container flex flex-col items-center justify-center bg-mikado w-full h-3/4 border-b-4 border-everglade/50 p-4">
        <Image
          src="/Logo.jpeg"
          width={200}
          height={200}
          alt="Picture of the author"
          className="mb-4 mt-6"
        />
        <div className="text-container text-center">
          <p className="text-everglade lg:text-3xl mb-2 font-bold sm:text-lg">
            Sustainable
          </p>
          <p className="lg:text-3xl mb-2 font-bold sm:text-lg">
            Data Systems for Data Science (SDSDS) CREATE
          </p>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center p-4 space-y-4">
        <Introduction />
        <CourseWork />
        <Workshops />
        <Skills />
      </main>
    </div>
  );
}

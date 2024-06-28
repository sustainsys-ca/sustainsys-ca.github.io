import Image from "next/image";
import styles from "./page.module.css";
import Introduction from "./Components/introduction";
import CourseWork from "./Components/courseWork";
import Workshops from "./Components/workshops";
import Skills from "./Components/skills";

export default function Home() {
  return (
    <div id="Container" className="min-h-screen flex flex-col">
      <div className="About-Container flex flex-col items-center justify-center bg-mikado w-full h-3/4 border-b-4 border-everglade/50">
        <Image
          src="/Logo.jpeg"
          width={200}
          height={200}
          alt="Picture of the author"
          className="mb-4 mt-6"
        />
        <div className="text-container flex">
          <p className="text-everglade text-3xl mb-8 font-bold">
            Sustainable&nbsp;
          </p>
          <p className="text-3xl mb-8 font-bold">
            Data Systems for Data Science (SDSDS) CREATE
          </p>
        </div>
      </div>
      
      <Introduction />
      <CourseWork />
      <Workshops />
      <Skills />
    </div>
  );
}

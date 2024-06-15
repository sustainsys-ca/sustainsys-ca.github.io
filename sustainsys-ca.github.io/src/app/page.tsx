import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div id="Container" className="h-screen flex flex-col">
      <div className="About-Container flex flex-col items-center justify-center bg-mikado w-screen h-3/4">
        <Image
          src="/Logo.jpeg"
          width={200}
          height={200}
          alt="Picture of the author"
          className="mb-4 mt-6"
        />
        <p className="text-textgreen text-3xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div id="Small-Descriptions" className="flex flex-row justify-evenly flex-wrap pt-11 bg-everglade text-white pb-20">
        <div id="Goal1" className="flex flex-col items-center">
          <Image src="/Logo.jpeg"
            width={200}
            height={300}
            alt="hi"
            className=""
          ></Image>
          Lorem ipsum dolor sit amet, consectetur a 
        </div>

        <div id="Goal1" className="flex flex-col items-center">
          <Image src="/Logo.jpeg"
            width={200}
            height={300}
            alt="hi"
            className=""
          ></Image>
          Lorem ipsum dolor sit amet, consectetur a 
        </div>

        <div id="Goal1" className="flex flex-col items-center">
          <Image src="/Logo.jpeg"
            width={200}
            height={300}
            alt="hi"
            className=""
          ></Image>
          Lorem ipsum dolor sit amet, consectetur a 
        </div>

        <div id="Goal1" className="flex flex-col items-center">
          <Image src="/Logo.jpeg"
            width={200}
            height={300}
            alt="hi"
            className=""
          ></Image>
          Lorem ipsum dolor sit amet, consectetur a 
        </div>
        
      </div>
    </div>
  );
}

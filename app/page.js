"use client";

//next imports
import Image from "next/image";

//components
import Apresentation from "@/components/apresentation";
import Synopse from "@/components/synopse";
import Trailer from "@/components/trailer";
import Characters from "@/components/characters";

//midia
import darkforest from "@/images/darkbackgroundforest.png";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center overflow-x-hidden">
      <Apresentation />
      <div className="bg-[url('../images/trailerbackground.png')] bg-contain bg-no-repeat bg-fixed bg-top w-full items-center flex flex-col justify-center">
        <Synopse />
        <Trailer />
        <Image src={darkforest} alt="floresta negra" className="-mt-20" />
      </div>
      <div className="bg-darkgray w-full">
        <Characters />
      </div>
    </main>
  );
}

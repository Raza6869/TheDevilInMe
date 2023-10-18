"use client";
//next imports
import Image from "next/image";

//components
import Apresentation from "@/components/client/apresentation";
import Synopse from "@/components/client/synopse";
import Trailer from "@/components/client/trailer";
import Characters from "@/components/client/characters";

//context
import CharacterProvider from "@/context/characterProvider";

//mediagit
import darkforest from "@/public/images/darkbackgroundforest.png";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center overflow-x-hidden">
      <Apresentation />
      <div className="bg-[url('../public/images/trailerbackground.png')] bg-contain bg-no-repeat bg-fixed bg-top w-full items-center flex flex-col justify-center">
        <Synopse />
        <Trailer />
        <Image src={darkforest} alt="floresta negra" className="-mt-20" />
      </div>
      <div className="bg-darkgray w-full">
        <CharacterProvider>
          <Characters />
        </CharacterProvider>
      </div>
    </main>
  );
}

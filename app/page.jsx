"use client";
//next imports
import Image from "next/image";

//components
import Apresentation from "@/components/apresentation";
import Synopse from "@/components/synopse";
import Trailer from "@/components/trailer";
import Characters from "@/components/characters";
import Multiplayer from "@/components/multiplayer";
import BuyNow from "@/components/buynow";

//context
import CharacterProvider from "@/context/characterProvider";

//media
import darkforest from "@/public/images/darkbackgroundforest.png";
import avaliations from "@/public/images/avaliations.png";
import darkblood from "@/public/images/darkbackgroundblood.png";
import Unoficial from "@/components/unoficial";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

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
        <Multiplayer />
        <Image
          src={avaliations}
          alt="Avaliations"
          className="w-screen sm:my-48 my-20"
        />
      </div>
      <Image src={darkblood} alt="sangue negro" />
      <BuyNow />
      <Unoficial />
      <Contact />
      <Footer />
    </main>
  );
}

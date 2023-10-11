import Image from "next/image";
import Apresentation from "@/components/apresentation";
import Synopse from "@/components/synopse";
import Trailer from "@/components/trailer";

import darkforest from "@/images/darkbackgroundforest.png";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Apresentation />
      <div className="bg-[url('../images/trailerbackground.png')] bg-contain bg-no-repeat bg-fixed bg-top w-full items-center flex flex-col justify-center">
        <Synopse />
        <Trailer />
        <Image src={darkforest} alt="floresta negra" className="" />
      </div>
    </main>
  );
}

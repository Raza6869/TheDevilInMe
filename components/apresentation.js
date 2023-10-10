import Image from "next/image";
import Header from "./header";

import title from "@/images/hometitle.png";

export default function Apresentation() {
  return (
    <div className="bg-[url('../images/homebackground.png')] h-[95vh] px-32 py-10 bg-cover font-andadaPro">
      <Header />
      <div className="flex flex-col mt-20">
        <div className="">
          <Image src={title} alt="Titulo" className="h-48 w-fit" />
          <span className="uppercase text-darkred text-2xl font-bold relative left-[22rem] bottom-12">
            já disponível
          </span>
        </div>
        <p className="text-xl w-[45%]">
          Será que você consegue sobreviver a uma noite em um hotel onde matar é
          arte?
        </p>
        <button className="bg-darkred  text-white uppercase w-48 px-4 py-3 mt-10 rounded-md hover:scale-110 hover:bg-red-600 transition-all duration-700">
          compre agora
        </button>
      </div>
    </div>
  );
}

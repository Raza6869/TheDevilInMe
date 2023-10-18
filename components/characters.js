//next imports
import Image from "next/image";
import { useContext } from "react";

//components
import ButtonSection from "./buttons-section";

//context
import { CharacterContext } from "@/context/characterContext";

//media
import charlie from "../public/images/CharlieLonnit.png";

export default function Characters() {
  const { char } = useContext(CharacterContext);

  console.log(char);

  return (
    <div
      className={`h-screen flex justify-center bg-[url('../public/images/charliebackground.png')] bg-cover`}
    >
      <div className=" h-full flex itens-center w-2/3">
        <div className="text-white py-4 flex flex-col justify-around">
          <div className="font-kronaOne text-8xl uppercase">
            <h1 className="flex flex-col">
              Charlie
              <span className="font-gothic text-blue-400">Lonnit</span>
            </h1>
            <div className="bg-blue-400 h-[2px] mt-4 w-full"></div>
          </div>
          <p className="-mt-10">
            Fundador da Lonnit Entertainment e diretor do documentário
            Architects of Murder. Charles é um dos cinco personagens jogáveis em
            The Devil In Me. <br />
            <br />
            Charlie aparece como um homem de temperamento explosivo, que
            enfrenta a raiva com mais raiva. Ele é muito exigente e severo com
            sua tripulação, não tem vergonha de repreendê-los e insultá-los por
            seu mau trabalho ou atitude.
          </p>
          <h2 className="text-blue-400 text-2xl">
            FURIOSO - DETERMINADO - ANSIOSO
          </h2>
          <ButtonSection />
        </div>
        <Image
          src={charlie}
          alt="charlie"
          className="w-fit hover:translate-x-10 transition-all ease-in-out duration-700"
        />
      </div>
    </div>
  );
}

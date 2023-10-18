"use client";
//next imports
import Image from "next/image";
import { useContext } from "react";

//components
import ButtonSection from "./buttons-section";
import { data } from "@/data/charcompdb";

//context
import useCharContext from "@/hook/useCharContext";

export default function Characters() {
  const { index } = useCharContext();
  const char = data[index];

  return (
    <div className={`h-screen ${char.background} bg-cover flex justify-center`}>
      <div className=" w-2/3 flex">
        <div className="text-white py-10 flex flex-col justify-around w-2/3">
          <div className="font-kronaOne text-8xl uppercase">
            <h1 className="flex flex-col">
              {char.fname}
              <span className={`font-gothic ${char.color}`}>{char.sname}</span>
            </h1>
            <div className={`${char.line} h-[2px] mt-4 w-full`}></div>
          </div>
          <p className="-mt-10">{char.desc}</p>
          <h2 className={`${char.color} text-2xl`}>{char.attributes}</h2>
          <ButtonSection />
        </div>
        <Image
          src={char.image}
          alt={char.fname}
          className="w-fit hover:translate-x-10 transition-all ease-in-out duration-700"
        />
      </div>
    </div>
  );
}

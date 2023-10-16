"use client";
//next imports
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "./header";

//media
import title from "@/images/hometitle.png";

export default function Apresentation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, type: "linear" }}
      className="bg-[url('../images/homebackground.png')] h-screen px-32 py-10 bg-cover bg-no-repeat font-andadaPro w-full items-center"
    >
      <Header />
      <motion.div
        initial={{ opacity: 0, translateX: "100px" }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1, type: "linear", delay: 1 }}
        className="flex flex-col mt-20"
      >
        <div className="">
          <Image src={title} alt="Titulo" className="h-48 w-fit" />
          <span className="uppercase text-darkred text-2xl font-bold relative left-[22rem] bottom-12">
            já disponível
          </span>
        </div>
        <p className="text-xl ">
          Será que você consegue sobreviver a uma noite em um hotel <br /> onde
          matar é arte?
        </p>
        <button className="bg-darkred  text-white uppercase w-48 px-4 py-3 mt-10 rounded-md hover:scale-110 hover:bg-red-600 transition-all duration-700">
          compre agora
        </button>
      </motion.div>
    </motion.div>
  );
}

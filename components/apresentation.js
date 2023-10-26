"use client";

//next imports
import { motion } from "framer-motion";
import Image from "next/image";

//components
import Header from "./header";

//media
import title from "@/public/images/hometitle.png";

export default function Apresentation() {
  return (
    <motion.div
      id="top"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, type: "linear" }}
      className="sm:bg-[url('../public/images/homebackground.png')] bg-[url('../public/images/apresentationbackgroundmobile.png')] sm:h-screen h-[70vh] sm:px-32 sm:py-10 px-8 py-4 bg-cover bg-no-repeat font-andadaPro w-full flex flex-col items-left justify-start"
    >
      <Header />
      <motion.div
        initial={{ opacity: 0, translateX: "100px" }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1, type: "linear", delay: 1 }}
        className="flex flex-col mt-20"
      >
        <div className="">
          <Image src={title} alt="Titulo" className="sm:h-48 sm:w-fit" />
          <span className="uppercase text-darkred text-2xl font-bold relative left-[22.8rem] bottom-12">
            já disponível
          </span>
        </div>
        <p className="text-xl ">
          Será que você consegue sobreviver a uma noite em um hotel <br /> onde
          matar é arte?
        </p>
        <a
          href="#buyNow"
          className="bg-darkred text-white text-center uppercase w-48 px-4 py-3 mt-10 rounded-md hover:scale-110 hover:bg-red-600 transition-all duration-700"
        >
          compre agora
        </a>
      </motion.div>
    </motion.div>
  );
}

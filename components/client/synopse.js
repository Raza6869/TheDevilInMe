"use client";
//next imports
import { motion } from "framer-motion";
import Image from "next/image";

//media
import duMet from "@/public/svg/synopsedumet.svg";

export default function Synopse() {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, type: "spring", delay: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#252323] h-[500px] max-w-[950px] first-letter: rounded-[6rem] my-12 scale-9 shadow-xl shadow-black"
    >
      <div className="bg-[url('../public/images/synopsebackground.png')] bg-contain rounded-[6rem] bg-no-repeat bg bg-bottom h-full flex">
        <Image
          src={duMet}
          alt="Du'Met"
          className="h-[100%] w-fit -mr-48 scale-110 -mt-6 "
        />
        <div className="text-right font-andadaPro py-16 px-20 flex flex-col gap-10">
          <h1 className="font-bold text-5xl text-redbase">
            POR QUE A PRESSA? COMEÇAMOS AGORA
          </h1>
          <p className="font-gothic text-white ml-20">
            The Devil In Me é um jogo Thriller interativo onde você tem o
            controle de cinco documentaristas que foram convidados à visitar uma
            réplica do “Castelo da Morte” de H. H. Holmes, o primeiro assassino
            em série americano. Mas ao chegarem lá, perceberam que estão sendo
            observados e até manipulados, e de repente, há muito mais em jogo do
            que imaginam...
          </p>
          <a className="text-redbase text-center font-bold text-3xl ml-20 justify-center cursor-pointer flex gap-2 hover:gap-4 transition-all duration-500 hover:text-red-600 hover:scale-110">
            SAIBA MAIS{" "}
            <span>
              <i class="bi bi-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

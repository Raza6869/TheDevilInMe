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
      className="bg-[#252323] h-[500px] sm:w-[950px] w-[540px] first-letter: sm:rounded-[6rem] rounded-2xl my-12 scale-9 shadow-xl shadow-black"
    >
      <div className="bg-[url('../public/images/synopsebackground.png')] bg-contain sm:rounded-[6rem] rounded-2xl bg-no-repeat bg bg-bottom h-full flex sm:flex-row flex-row-reverse">
        <Image
          src={duMet}
          alt="Du'Met"
          className="sm:h-[100%] h-[90%] w-fit sm:-mr-48 -ml-64 sm:translate-x-0 translate-x-14 scale-110 sm:-mt-6 mt-7 sm:ml-0 "
        />
        <div className="sm:text-right text-left font-andadaPro sm:py-16 py-12 sm:px-20 px-8 flex flex-col sm:gap-10 gap-8 z-10">
          <h1 className="font-bold sm:text-5xl text-3xl text-redbase">
            POR QUE A PRESSA? COMEÇAMOS AGORA
          </h1>
          <p className="font-gothic text-white sm:ml-20">
            The Devil In Me é um jogo Thriller interativo onde você tem o
            controle de cinco documentaristas que foram convidados à visitar uma
            réplica do “Castelo da Morte” de H. H. Holmes, o primeiro assassino
            em série americano. Mas ao chegarem lá, perceberam que estão sendo
            observados e até manipulados, e de repente, há muito mais em jogo do
            que imaginam...
          </p>
          <a className="sm:text-redbase text-white sm:p-0 p-3 rounded-md sm:bg-transparent bg-redbase w-fit sm:w-auto text-center font-bold text-3xl sm:ml-20 justify-center cursor-pointer flex gap-2 hover:gap-4 transition-all duration-500 sm:hover:text-red-600 hover:scale-110">
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

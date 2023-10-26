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
      id="about"
      className="bg-[#252323] sm:h-[500px] h-full sm:max-w-[950px] first-letter: sm:rounded-[6rem] rounded my-12 shadow-xl shadow-black sm:overflow-auto overflow-hidden "
    >
      <div className="bg-[url('../public/images/synopsebackground.png')] bg-contain sm:rounded-[6rem] rounded bg-no-repeat bg bg-bottom h-full flex sm:flex-row flex-col-reverse items-end ">
        <Image
          src={duMet}
          alt="Du'Met"
          className="w-2/3 sm:w-fit h-full sm:-mr-48 -mt-64 -mr-28 sm:ml-0"
        />
        <div className="sm:text-right text-center font-andadaPro sm:py-16 py-12 sm:px-20 px-4 flex flex-col sm:gap-10 gap-8 z-10 items-center">
          <h1 className="font-bold sm:text-5xl text-3xl text-redbase">
            POR QUE A PRESSA? COMEÇAMOS AGORA
          </h1>
          <p className="font-gothic text-white sm:ml-20 sm:text-base text-sm">
            The Devil In Me é um jogo Thriller interativo onde você tem o
            controle de cinco documentaristas que foram convidados à visitar uma
            réplica do “Castelo da Morte” de H. H. Holmes, o primeiro assassino
            em série americano. Mas ao chegarem lá, perceberam que estão sendo
            observados e até manipulados, e de repente, há muito mais em jogo do
            que imaginam...
          </p>
          <a
            href="https://thedarkpictures.fandom.com/wiki/The_Devil_in_Me"
            className=" text-lightgray bg-red-800 p-2 rounded-md sm:bg-transparente w-fit sm:w-auto text-center font-bold sm:text-3xl text-xl sm:ml-20 ml-0 justify-center cursor-pointer flex gap-2 hover:gap-4 transition-all duration-500 hover:scale-105"
          >
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

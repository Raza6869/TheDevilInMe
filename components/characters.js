"use client";
//next imports
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

//components
import ButtonSection from "./buttons-section";
import { data } from "@/data/charcompdb";

//context
import useCharContext from "@/hook/useCharContext";

export default function Characters() {
  const { index } = useCharContext();
  const char = data[index];

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={index}
        initial={{ opacity: 0, translateX: 20 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: -20 }}
        transition={{ duration: 0.5 }}
        id="characters"
        className={`sm:h-[100vh] h-[50vh] w-screen overflow-y-hidden sm:my-0 my-20 ${char.background}  bg-cover bg-top flex sm:flex-row flex-col justify-center `}
      >
        <div className=" sm:w-2/3 w-screen flex ">
          <div className="text-white py-10 flex flex-col justify-around sm:w-2/3 z-10 ml-5 sm:ml-0">
            <div className="font-kronaOne sm:text-8xl text-5xl uppercase">
              <motion.h1
                key={index}
                initial={{ translateX: 20, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                exit={{ translateX: -20, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col"
              >
                {char.fname}
                <span className={`font-gothic ${char.color}`}>
                  {char.sname}
                </span>
              </motion.h1>
              <motion.div
                key={index}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ translateX: -20, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className={`${char.line} h-[2px] sm:mt-4 mt-2 w-full`}
              ></motion.div>
            </div>
            <motion.p
              key={index}
              initial={{ translateX: 20, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              exit={{ translateX: -20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sm:-mt-10 mt-2 text-sm sm:text-base sm:mb-0 mb-4"
            >
              {char.desc}
            </motion.p>
            <motion.h2
              key={index}
              initial={{ translateX: 20, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              exit={{ translateX: -20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`${char.color} text-md sm:text-2xl sm:mb-0 mb-4`}
            >
              {char.attributes}
            </motion.h2>
            <ButtonSection />
          </div>
          <Image
            src={char.image}
            alt={char.fname}
            className="sm:w-fit w-1/3 hover:z-10 hover:translate-x-10 transition-all ease-in-out duration-700 sm:opacity-100 opacity-75 sm:ml-0 -ml-48 sm:translate-y-0 translate-y-10 "
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

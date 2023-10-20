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
        className={`h-screen ${char.background} bg-cover bg-top flex justify-center `}
      >
        <div className=" w-2/3 flex">
          <div className="text-white py-10 flex flex-col justify-around w-2/3">
            <div className="font-kronaOne text-8xl uppercase">
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
                className={`${char.line} h-[2px] mt-4 w-full`}
              ></motion.div>
            </div>
            <motion.p
              key={index}
              initial={{ translateX: 20, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              exit={{ translateX: -20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="-mt-10"
            >
              {char.desc}
            </motion.p>
            <motion.h2
              key={index}
              initial={{ translateX: 20, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              exit={{ translateX: -20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`${char.color} text-2xl`}
            >
              {char.attributes}
            </motion.h2>
            <ButtonSection />
          </div>
          <Image
            src={char.image}
            alt={char.fname}
            className="w-fit hover:translate-x-10 transition-all ease-in-out duration-700"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

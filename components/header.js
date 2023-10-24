"use client";
//next imports
import { motion } from "framer-motion";
import Image from "next/image";

//media
import DarkPictureLogo from "@/public/svg/darkpictureslogo.svg";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, translateX: "-100px" }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1, type: "linear", delay: 0.5 }}
      className="flex items-center justify-between max-w-[535px] "
    >
      <a href="https://www.thedarkpictures.com/the-devil-in-me">
        <Image
          src={DarkPictureLogo}
          alt="Logo da Dark Pictures"
          className="w-12 cursor-pointer hover:scale-105 transition-all duration-700"
        />
      </a>
      <ul className="flex gap-6 font-andadaPro uppercase">
        <li className="hover:text-darkred cursor-pointer">
          <a href="#about">sobre</a>
        </li>
        <li className="hover:text-darkred cursor-pointer">
          <a href="#characters">personagens</a>
        </li>
        <li className="hover:text-darkred cursor-pointer">
          <a href="#buyNow">compre agora</a>
        </li>
      </ul>
    </motion.header>
  );
}

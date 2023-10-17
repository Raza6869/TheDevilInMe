"use client";
import { motion } from "framer-motion";

export default function Trailer() {
  return (
    <div className=" h-screen  flex justify-center items-center w-full">
      <motion.iframe
        initial={{ opacity: 0.5, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", delay: 0.5 }}
        className="rounded-md"
        width="840"
        height="472,5"
        src="https://www.youtube.com/embed/Nn5dK65VugY?si=BQ5wRkc9DiV0mfl-&amp;start=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></motion.iframe>
    </div>
  );
}

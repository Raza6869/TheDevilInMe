"use client";
import { motion } from "framer-motion";

export default function Trailer() {
  return (
    <div className=" h-screen flex justify-center items-center w-full ">
      <motion.iframe
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, type: "spring", delay: 0.5 }}
        viewport={{ once: true }}
        className="rounded-md sm:hover:scale-110 transition-all ease-in-out duration-700 shadow-lg shadow-black sm:mx-0 mx-4"
        width="672"
        height="378"
        src="https://www.youtube.com/embed/Nn5dK65VugY?si=BQ5wRkc9DiV0mfl-&amp;start=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></motion.iframe>
    </div>
  );
}

"use client";
//next imports
import { motion } from "framer-motion";

export default function ScrollToTop() {
  return (
    <motion.a
      href="#top"
      initial={{ opacity: 0, scale: "80%" }}
      animate={{ opacity: 1, scale: "100%" }}
      transition={{ type: "spring" }}
      className="bg-redbase px-4 py-3 text-xl cursor-pointer w-fit text-bold text-white fixed rounded-full right-10 bottom-10 z-50"
    >
      <i class="bi bi-arrow-up"></i>
    </motion.a>
  );
}

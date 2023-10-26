"user client";
//next imports
import { motion } from "framer-motion";

//context
import useCharContext from "@/hook/useCharContext";

export default function ButtonSection() {
  const { indexTogle, lastIndexTogle } = useCharContext();

  return (
    <motion.div
      initial={{ translateX: 20, opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ translateX: -20, opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="flex font-andadaPro sm:gap-4 gap-2 font-bold sm:text-xl text-[10px] mb-4 "
    >
      <button
        onClick={lastIndexTogle}
        className="uppercase sm:py-3 sm:px-6 px-4 py-2 hover:px-8 transition-all ease-in-out border-2 border-white rounded-md "
      >
        Anterior
      </button>
      <button
        onClick={indexTogle}
        className="uppercase bg-white text-darkgray sm:py-3 sm:px-6 px-5 py-2 rounded-md hover:px-8 transition-all ease-in-out"
      >
        Próximo
      </button>
    </motion.div>
  );
}

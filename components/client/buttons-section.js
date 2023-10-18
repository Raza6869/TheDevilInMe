"user client";

import useCharContext from "@/hook/useCharContext";

export default function ButtonSection() {
  const { indexTogle, lastIndexTogle } = useCharContext();

  return (
    <div className="flex font-andadaPro gap-4 font-bold text-xl ">
      <button
        onClick={lastIndexTogle}
        className="uppercase py-3 px-6 hover:px-8 transition-all ease-in-out border-2 border-white rounded-md"
      >
        Anterior
      </button>
      <button
        onClick={indexTogle}
        className="uppercase bg-white text-darkgray py-3 px-6 rounded-md hover:px-8 transition-all ease-in-out"
      >
        Próximo
      </button>
    </div>
  );
}
